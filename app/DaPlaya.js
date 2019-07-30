const { app, net } = require('electron');

const Stream = require('stream').Transform;
const path = require('path');
const fs = require('fs');
const AdmZip = require('adm-zip');

class DaPlaya {

  static getPatchFile(store, successCallback, errorCallback) {
    const patchId = store.getPatchId();
    const apiKey = store.getApiKey();
    const baseUrl = 'https://cables.gl';
    const url = `${baseUrl}/api/project/${patchId}/export`;
    const request = net.request({
      url: url
    });
    request.setHeader('X-apikey', apiKey);
    request.on('response', (response) => {
      if (response.statusCode !== 200) {
        if (typeof errorCallback === 'function') {
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
        const originalBasename = path.basename(info.path, '.zip');
        const patchDir = originalBasename.substr(0, originalBasename.lastIndexOf('_'));
        const zipRequest = net.request({
          url: zipUrl,
          encoding: null
        });
        zipRequest.chunkedEncoding = true;
        zipRequest.setHeader('X-apikey', apiKey);
        zipRequest.on('response', (zipResponse) => {
          if (zipResponse.statusCode !== 200) {
            if (typeof errorCallback === 'function') {
              errorCallback(zipResponse);
            }
          }
          let zipContent = new Stream();
          zipResponse.on('data', (zipChunk) => {
            zipContent.push(zipChunk);
          });
          zipResponse.on('end', () => {
            successCallback(patchDir, zipContent);
          });
        });
        zipRequest.on('error', () => {
          throw `http error (${response.statusCode})`;
        });
        zipRequest.end();
      });
    });
    request.on('error', (response) => {
      throw `http error (${response.statusCode})`;
    });
    request.end();
  }

  static importPatch(store, successCallback, errorCallback) {
    DaPlaya.getPatchFile(store, (patchDir, zipContent) => {
      const storageLocation = path.join(store.getStorageDir(), patchDir);
      if (!fs.existsSync(storageLocation)) {
        fs.mkdirSync(storageLocation, { recursive: true });
      }
      fs.writeFileSync(`${storageLocation}.zip`, zipContent.read());
      const zip = AdmZip(`${storageLocation}.zip`);
      zip.extractAllTo(storageLocation, true);
      if (typeof successCallback === 'function') {
        store.setCurrentPatchDir(storageLocation);
        successCallback(storageLocation);
      }
    }, () => {
      if (typeof errorCallback === 'function') {
        errorCallback();
      }
    });
  }

  static reloadPatch(store, successCallback, errorCallback) {
    DaPlaya.importPatch(store, (patchId, zipContent) => {
      if (typeof successCallback === 'function') {
        successCallback();
      }
    }, () => {
      if (typeof errorCallback === 'function') {
        errorCallback();
      }
    });
  };
}

// expose the class
module.exports = DaPlaya;