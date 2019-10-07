const Stream = require('stream').Transform;
const AdmZip = require('adm-zip');

const path = require('path');
const fs = require('fs');
const https = require('https');

class DaPlaya {

  static getPatchFile(store, successCallback, errorCallback) {
    const patchId = store.getPatchId();
    const apiKey = store.getApiKey();
    https.get({
      hostname: 'cables.gl',
      path: `/api/project/${patchId}/export`,
      headers: {
        'X-apikey': apiKey
      }
    }, (response) => {
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
        const originalBasename = path.basename(info.path, '.zip');
        const patchDir = originalBasename.substr(0, originalBasename.lastIndexOf('_'));
        https.get({
          hostname: 'cables.gl',
          path: info.path,
          encoding: null,
          chunkedEncoding: true,
          headers: {
            'X-apikey': apiKey
          }
        }, (zipResponse) => {
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
        }).on('error', err => {
          console.log('ziperror');
        });
      });
    }).on('error', err => {
      console.log('error', err);
    });
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
    if (store.getPatchId()) {
      DaPlaya.importPatch(store, (patchId, zipContent) => {
        if (typeof successCallback === 'function') {
          successCallback();
        }
      }, () => {
        if (typeof errorCallback === 'function') {
          errorCallback();
        }
      });
    } else {
      if (typeof errorCallback === 'function') {
        errorCallback();
      }
    }
  };
}

// expose the class
module.exports = DaPlaya;