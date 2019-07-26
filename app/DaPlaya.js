const { net, BrowserWindow, dialog } = require('electron');

const Stream = require('stream').Transform;

const path = require('path');
const url = require('url');
const fs = require('fs');

const AdmZip = require('adm-zip');

class DaPlaya {

  reloadPatch(mainWindow, store, successCallback, errorCallback) {
    const patchId = store.getPatchId();
    const apiKey = store.getApiKey();
    const baseUrl = 'https://cables.gl';
    const url = `${baseUrl}/api/project/${patchId}/export`;
    const request = net.request({
      url: url
    });
    request.setHeader('X-apikey', apiKey);
    console.log("request to", url, apiKey);
    request.on('response', (response) => {
      console.log("done");
      if (response.statusCode !== 200) {
        if(typeof errorCallback === "function"){
          errorCallback(response);
        }
      }
      let exportInfo = '';
      response.on('data', (chunk) => {
        exportInfo += chunk;
      });
      response.on('end', () => {
        const info = JSON.parse(exportInfo);
        const zipUrl = `${baseUrl}${info.path}`;
        const zipRequest = net.request({
          url: zipUrl,
          encoding: null
        });
        zipRequest.chunkedEncoding = true;
        zipRequest.setHeader('X-apikey', apiKey);
        console.log("request to", zipUrl, apiKey);

        zipRequest.on('response', (zipResponse) => {
          console.log("done");

          if (zipResponse.statusCode !== 200) {
            if(typeof errorCallback === "function"){
              errorCallback(zipResponse);
            }
          }
          let zipContent = new Stream();
          zipResponse.on('data', (zipChunk) => {
            zipContent.push(zipChunk);
          });
          zipResponse.on('end', () => {

            const patchDir = path.join(__dirname, `/patches/${patchId}/`);
            if (!fs.existsSync(patchDir)) {
              fs.mkdirSync(patchDir);
            }
            fs.writeFileSync(`${patchDir}${patchId}.zip`, zipContent.read());
            const zip = AdmZip(`${patchDir}${patchId}.zip`);
            zip.extractAllTo(patchDir, true);
            if(typeof successCallback === "function"){
              successCallback(patchDir);
            }
          });
        });
        zipRequest.on('error', () => {
          console.log(`http error while downloading patch (${response.statusCode})`);
          throw `http error (${response.statusCode})`;
        });
        zipRequest.end();
      });
    });
    request.on('error', () => {
      console.log(`http error while downloading patch (${response.statusCode})`);
      throw `http error (${response.statusCode})`;
    });
    request.end();
  };

  getNewPatch(mainWindow, store) {
    let child = new BrowserWindow(
      {
        parent: mainWindow,
        modal: true,
        show: false,
        center: true,
        movable: false,
        closable: true,
        skipTaskbar: true,
        frame: false,
        hasShadow: true,
        titleBarStyle: 'hidden',
        webPreferences: {
          devTools: true,
          nodeIntegration: true

        }
      });
    child.webContents.openDevTools();
    child.loadURL(url.format({
      pathname: path.join(__dirname, 'prompt.html'),
      protocol: 'file:',
      slashes: true
    }));
    child.once('ready-to-show', () => {
      child.show();
    });
    child.on('closed', () => {
      console.log('new patch: ', store.getApiKey(), store.getPatchId());
      dialog.showMessageBox(mainWindow, {
        type: 'info',
        title: 'success',
        message: "new patch configured, press ctrl-r to fetch and reload now",
        buttons: ["got it"]
      });
    });
  };

}

// expose the class
module.exports = DaPlaya;