const { dialog, app, remote, BrowserWindow, Menu } = require('electron');
const Store = require('./Store');
const DaPlaya = require('./DaPlaya');

const path = require('path');
const url = require('url');
const fs = require('fs');

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

const daPlaya = new DaPlaya();
const store = new Store();

function createWindow() {

  const apiKey = store.getApiKey();
  const patchId = store.getPatchId();

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  });
  mainWindow.setFullScreen(true);
  mainWindow.setAutoHideMenuBar(true);

  // load the index.html of the patch
  const userDataPath = (app || remote.app).getPath('userData');
  let patchIndexHtml = path.join(userDataPath, `/patches/${patchId}/index.html`);
  console.log("looking for patch in ", patchIndexHtml);
  if (!apiKey || !patchId || !fs.existsSync(patchIndexHtml)) {
    // load default patch if app is unconfigured or patch is not downloaded
    console.log("loading default patch");
    patchIndexHtml = path.join(__dirname, '/patches/default/index.html');
  }
  mainWindow.loadURL(url.format({
    pathname: patchIndexHtml,
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.webContents.on('devtools-opened', () => {
    mainWindow.focus();
    setImmediate(() => {
      mainWindow.focus();
    });
  });

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  var menu = Menu.buildFromTemplate([
    {
      label: 'Menu',
      submenu: [
        {
          label: 'Reload patch',
          accelerator: 'Ctrl+R',
          click() {
            try {
              daPlaya.reloadPatch(mainWindow, store, (patchDir) => {
                let patchIndexHtml = `${patchDir}index.html`;
                console.log('upadating from', patchIndexHtml);
                mainWindow.loadURL(url.format({
                  pathname: patchIndexHtml,
                  protocol: 'file:',
                  slashes: true
                }));
              }, (message) => {
                console.log(message);
                dialog.showMessageBox(mainWindow, {
                  type: 'error',
                  title: 'error',
                  message: message
                });
              });
            } catch (e) {
              dialog.showMessageBox(mainWindow, {
                type: 'error',
                title: 'error',
                message: e.messsage
              });
            }
          }
        },
        {
          label: 'Get new patch',
          accelerator: 'Ctrl+N',
          click() {
            console.log('getting patch', store.get('apiKey'), store.get('patchId'));
            try {
              daPlaya.getNewPatch(mainWindow, store);
            } catch (e) {
              dialog.showMessageBox(mainWindow, {
                type: 'error',
                title: 'error',
                message: e.messsage
              });
            }
          }
        },
        {
          label: 'Toggle fullscreen',
          accelerator: 'Escape',
          click() {
            if (mainWindow.isFullScreen()) {
              mainWindow.setFullScreen(false);
            } else {
              mainWindow.setFullScreen(true);
            }
          }
        },
        {
          label: 'Exit',
          click() {
            app.quit();
          }
        }
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);

}

app.on('ready', function() {
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});