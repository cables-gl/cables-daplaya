const { App, Window, Shortcut } = nw;
const path = require('path');
const fs = require('fs');
const url = require('url');

const Store = require('./store');
const DaPlaya = require('./daPlaya');

const store = new Store();
const storageDir = path.join(path.dirname(process.execPath), 'patches');
store.setStorageDir(storageDir);
let isDefaultPatch = true;
let patchFile = '../assets/patch/index.html';

const patchId = store.getPatchId();
if (patchId) {
  const patchLocation = store.getCurrentPatchDir();
  if (fs.existsSync(patchLocation)) {
    patchFile = url.format({
      pathname: path.join(patchLocation, 'index.html'),
      protocol: 'file:',
      slashes: true
    });
    isDefaultPatch = false;
  }
}
let fullscreen = false;

const windowCallback = (win) => {
  console.log('loading', patchFile);
  win.on('loaded', () => {
    console.log('loaded', win, patchFile);
    const patchId = store.getPatchId();
    if (patchId) {
      const patchLocation = store.getCurrentPatchDir();
      if (fs.existsSync(patchLocation)) {
        patchFile = url.format({
          pathname: path.join(patchLocation, 'index.html'),
          protocol: 'file:',
          slashes: true
        });
        isDefaultPatch = false;
      }
      win.window.addEventListener('keydown', (event) => {
        const oldWin = win;
        const windowOptions = {
          focus: oldWin.focus,
          width: oldWin.width,
          height: oldWin.height,
          position: oldWin.position,
          fullscreen: oldWin.isFullscreen,
          focus: true
        };
        console.log('keydown', event, windowOptions);
        if (event.ctrlKey) {
          switch (event.keyCode) {
            case 82:
              console.log('reload');
              DaPlaya.reloadPatch(store, () => {
                console.log('reloaded');
                patchFile = url.format({
                  pathname: path.join(store.getCurrentPatchDir(), 'index.html'),
                  protocol: 'file:',
                  slashes: true
                });
                Window.open(patchFile, windowOptions, windowCallback);
                oldWin.close(true);
              });
              break;
            case 78:
              let apiKey = prompt('API-Key:', store.getApiKey() ? store.getApiKey() : '');
              store.setApiKey(apiKey);
              let patchId = prompt('Patch-ID:', store.getPatchId() ? store.getPatchId() : '');
              if (patchId.includes('cables.gl')) {
                // we assume the user basically just pasted the URL here
                patchId = patchId.split('/').pop();
                patchId = patchId.split('?')[0];
              }
              store.setPatchId(patchId);
              DaPlaya.importPatch(store,
                () => {
                  alert('patch successfully imported, you can use ctrl-r to resync with the cables editor');
                  patchFile = url.format({
                    pathname: path.join(store.getCurrentPatchDir(), 'index.html'),
                    protocol: 'file:',
                    slashes: true
                  });
                  Window.open(patchFile, windowOptions, windowCallback);
                  oldWin.close(true);
                },
                () => {
                  alert('something went wrong, try again :/');
                });
              break;
            default:
              break;
          }
        } else {
          console.log('no ctrl');
          if (event.keyCode == 27) {
            console.log('escape');
            if (fullscreen) {
              console.log('fs');
              win.leaveFullscreen();
              fullscreen = false;
            } else {
              console.log('nofs');
              win.enterFullscreen();
              fullscreen = true;
            }
          }
        }
      });
    }

    setTimeout(() => {
      if (isDefaultPatch) {
        alert('this seems to be your first time here, \npress ctrl-n to import a patch and get going \npress escape to toggle fullscreen');
      }
    }, 1000);

  });
};

Window.open(patchFile, {
  focus: true,
  width: 1366,
  height: 768
}, windowCallback);