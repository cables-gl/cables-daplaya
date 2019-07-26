const electron = require('electron');
const path = require('path');
const fs = require('fs');

class Store {

  constructor() {
    this.opts = {};
    this.MAIN_CONFIG_NAME = 'cables-preferences';
    this.APIKEY_FIELD = 'apiKey';
    this.PATCHID_FIELD = 'patchId';

    this.opts.defaults = {
      configName: this.MAIN_CONFIG_NAME
    };
    const defaults = {};
    defaults[this.APIKEY_FIELD] = null;
    defaults[this.PATCHID_FIELD] = null;
    this.refresh();
  }

  refresh() {
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');
    this.path = path.join(userDataPath, this.opts.configName + '.json');
    this.data = Store.parseDataFile(this.path, this.opts.defaults);
  }

  get(key) {
    this.refresh();
    return this.data[key];
  }

  set(key, val) {
    this.data[key] = val;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }

  // convenience methods
  getApiKey() {
    return this.get(this.APIKEY_FIELD);
  }

  setApiKey(value) {
    this.set(this.APIKEY_FIELD, value);
  }

  getPatchId() {
    return this.get(this.PATCHID_FIELD);
  }


  setPatchId(value) {
    this.set(this.APIKEY_FIELD, value);
  }

  // helper methods
  static parseDataFile(filePath, defaults) {
    try {
      return JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
      return defaults;
    }
  }
}

// expose the class
module.exports = Store;
