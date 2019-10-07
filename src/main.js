const { App, Window, Shortcut } = nw;
const path = require('path');
const fs = require('fs');
const url = require('url');

const Store = require('./store');
const DaPlaya = require('./daPlaya');

let isDefaultPatch = true;
let patchFile = '../assets/patch/index.html';

const store = new Store();
const storageDir = path.join(path.dirname(process.execPath), 'patches');
store.setStorageDir(storageDir);
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

Window.open(patchFile, {
  focus: true,
  width: 1366,
  height: 768
}, (win) => {

  const keyEscape = new Shortcut({
    key: 'Escape',
    active: () => {
      win.toggleFullscreen();
    },
    failed: (err) => {
      console.log('err esc', err);
    }
  });

  const keyCtrlR = new Shortcut({
    key: 'Ctrl+R',
    active: () => {
      DaPlaya.reloadPatch(store, () => {
        App.unregisterGlobalHotKey(keyCtrlR);
        App.unregisterGlobalHotKey(keyCtrlN);
        App.unregisterGlobalHotKey(keyEscape);
        chrome.runtime.reload();
      });
    },
    failed: (err) => {
      console.log('err r', err);
    }
  });

  const keyCtrlN = new Shortcut({
    key: 'Ctrl+N',
    active: () => {
      let apiKey = prompt('API-Key:', store.getApiKey() ? store.getApiKey() : '');
      store.setApiKey(apiKey);
      let patchId = prompt('Patch-ID:', store.getPatchId() ? store.getPatchId() : '');
      store.setPatchId(patchId);
      DaPlaya.importPatch(store,
        () => {
          alert('patch successfully imported, you can use ctrl-r to resync with the cables editor');
          App.unregisterGlobalHotKey(keyCtrlR);
          App.unregisterGlobalHotKey(keyCtrlN);
          App.unregisterGlobalHotKey(keyEscape);
          chrome.runtime.reload();
        },
        () => {
          alert('something went wrong, try again :/');
        });
    },
    failed: (err) => {
      console.log('err n', err);
    }
  });

  win.on('focus', () => {
    App.registerGlobalHotKey(keyCtrlR);
    App.registerGlobalHotKey(keyCtrlN);
    App.registerGlobalHotKey(keyEscape);
  });

  win.on('blur', () => {
    App.unregisterGlobalHotKey(keyCtrlR);
    App.unregisterGlobalHotKey(keyCtrlN);
    App.unregisterGlobalHotKey(keyEscape);
  });

  win.on('loaded', () => {
    App.registerGlobalHotKey(keyCtrlR);
    App.registerGlobalHotKey(keyCtrlN);
    App.registerGlobalHotKey(keyEscape);

    setTimeout(() => {
      if (isDefaultPatch) {
        alert('this seems to be your first time here, \npress ctrl-n to import a patch and get going \npress escape to toggle fullscreen');
      }
    }, 1000);
  });

});