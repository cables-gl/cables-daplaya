const { dialog, app, ipcMain, BrowserWindow, Menu } = require("electron");

const path = require("path");

const Store = require("./Store");
const DaPlaya = require("./DaPlaya");

const url = require("url");
const fs = require("fs");

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

const store = new Store(path.join(__dirname, 'patches'));

let isDefaultPatch = true;

function createWindow() {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    backgroundColor: "#000000",
    show: false,
    x: store.getWindowXPos(),
    y: store.getWindowYPos(),
    width: store.getWindowWidth(),
    height: store.getWindowHeight(),
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      contextIsolation: false,
    }
  });
  // mainWindow.webContents.openDevTools()

  mainWindow.on("move", () => {
    const pos = mainWindow.getPosition();
    store.setWindowXPos(pos[0]);
    store.setWindowYPos(pos[1]);
  });

  mainWindow.on("resize", () => {
    const size = mainWindow.getSize();
    store.setWindowWidth(size[0]);
    store.setWindowHeight(size[1]);
  });

  mainWindow.switchPatch = () => {
    const patchDir = store.getCurrentPatchDir();
    let patchIndexHtml = path.join(patchDir, "index.html");
    mainWindow.loadURL(
      url.format({
        pathname: patchIndexHtml,
        protocol: "file:",
        slashes: true
      })
    );
  };
  mainWindow.getNewPatch = () => {
    let child = new BrowserWindow({
      parent: mainWindow,
      width: 320,
      height: 150,
      modal: true,
      show: false,
      center: true,
      movable: false,
      closable: true,
      skipTaskbar: true,
      frame: false,
      hasShadow: true,
      titleBarStyle: "hidden",
      webPreferences: {
        nodeIntegration: true,
        webSecurity: false,
        contextIsolation: false,
      }
    });
    child.loadURL(
      url.format({
        pathname: path.join(__dirname, "prompt.html"),
        protocol: "file:",
        slashes: true
      })
    );
    child.once("ready-to-show", () => {
      child.show();
    });
  };
  mainWindow.setFullScreen(store.getFullscreen());
  mainWindow.setAutoHideMenuBar(true);

  // load the index.html of the patch, default to the prepackaged version
  let patchIndexHtml = path.join(
    store.getStorageDir(),
    "default",
    "index.html"
  );
  const patchId = store.getPatchId();
  if (patchId) {
    const patchLocation = store.getCurrentPatchDir();
    if (fs.existsSync(patchLocation)) {
      patchIndexHtml = path.join(patchLocation, "index.html");
      isDefaultPatch = false;
    }
  }
  mainWindow.loadURL(
    url.format({
      pathname: patchIndexHtml,
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.webContents.on("devtools-opened", () => {
    mainWindow.focus();
    setImmediate(() => {
      mainWindow.focus();
    });
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    // needs a timeout so the below window will still draw
    setTimeout(() => {
      if (isDefaultPatch) {
        dialog.showMessageBox(mainWindow, {
          type: "info",
          title: "hello!",
          message:
            "this seems to be your first time here, \npress ctrl-n to import a patch and get going \nor use the menu (press alt to show) to open existing patches\n press escape to toggle fullscreen",
          buttons: ["OK"]
        });
      }
    }, 500);
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  var menu = Menu.buildFromTemplate([
    {
      label: "Menu",
      submenu: [
        {
          label: "Reload patch",
          accelerator: "CmdOrCtrl+R",
          click() {
            try {
              DaPlaya.reloadPatch(
                store,
                () => {
                  mainWindow.switchPatch();
                },
                message => {
                  dialog.showMessageBox(mainWindow, {
                    type: "error",
                    title: "error",
                    message: message
                  });
                }
              );
            } catch (e) {
              dialog.showMessageBox(mainWindow, {
                type: "error",
                title: "error",
                message: e.messsage
              });
            }
          }
        },
        {
          label: "Download new patch",
          accelerator: "CmdOrCtrl+N",
          click() {
            try {
              mainWindow.getNewPatch();
            } catch (e) {
              dialog.showMessageBox(mainWindow, {
                type: "error",
                title: "error",
                message: e.messsage
              });
            }
          }
        },
        {
          label: "Open patch",
          accelerator: "CmdOrCtrl+O",
          click() {
            try {
              dialog.showOpenDialog(
                mainWindow,
                {
                  title: "select patchdir",
                  defaultPath: store.getStorageDir(),
                  properties: ["openDirectory"]
                },
                dirNames => {
                  if (!dirNames || dirNames.length > 1) {
                    dialog.showMessageBox(mainWindow, {
                      type: "warning",
                      title: "pick one",
                      message: "choose exactly one directory"
                    });
                  } else {
                    store.setCurrentPatchDir(dirNames[0]);
                    mainWindow.switchPatch();
                  }
                }
              );
            } catch (e) {
              dialog.showMessageBox(mainWindow, {
                type: "error",
                title: "error",
                message: e.messsage
              });
            }
          }
        },
        {
          label: "Toggle fullscreen",
          accelerator: "Escape",
          click() {
            if (mainWindow.isFullScreen()) {
              mainWindow.setFullScreen(false);
              store.setFullscreen(false);
            } else {
              mainWindow.setFullScreen(true);
              store.setFullscreen(true);
            }
          }
        },
        {
          label: "Exit",
          click() {
            app.quit();
          }
        }
      ]
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "pasteandmatchstyle" },
        { role: "delete" },
        { role: "selectall" }
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);
}

ipcMain.on("set-new-credentials", (e, arg) => {
  let patchId = arg.patchId;
  if (patchId.includes("cables.gl")) {
    const parts = patchId.split("/");
    const path = parts[parts.length - 1].split("?");
    patchId = path[0];
  }

  store.setApiKey(arg.apiKey);
  store.setPatchId(patchId);
  DaPlaya.importPatch(
    store,
    () => {
      mainWindow.switchPatch();
      // needs a timeout so the below window will still draw
      setTimeout(() => {
        dialog.showMessageBox(mainWindow, {
          type: "info",
          title: "yay!",
          message:
            "patch successfully imported, you can use ctrl-r to resync with the cables editor",
          buttons: ["OK"]
        });
      }, 500);
    },
    message => {
      dialog.showMessageBox(mainWindow, {
        type: "error",
        title: "error",
        message,
        buttons: ["damn it"]
      });
    }
  );
});

app.on("ready", function() {
  createWindow();
});

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
