const electron = require('electron');
const path = require('path');
const fs = require('fs');

class Store {

  constructor() {
    this.MAIN_CONFIG_NAME = 'daplaya-preferences';
    this.APIKEY_FIELD = 'apiKey';
    this.PATCHID_FIELD = 'patchId';
    this.CURRENTPATCHDIR_FIELD = 'currentPatchDir';
    this.STORAGEDIR_FIELD = 'storageDir';

    this.opts = {};
    this.opts.defaults = {};
    this.opts.configName = this.MAIN_CONFIG_NAME;
    this.opts.defaults[this.APIKEY_FIELD] = null;
    this.opts.defaults[this.PATCHID_FIELD] = null;
    this.opts.defaults[this.CURRENTPATCHDIR_FIELD] = null;
    this.opts.defaults[this.STORAGEDIR_FIELD] = null;
    this.data = this.opts.defaults;
    this.refresh();
  }

  refresh() {
    if (this.data && this.data.hasOwnProperty(this.STORAGEDIR_FIELD) && this.data[this.STORAGEDIR_FIELD]) {
      const userDataPath = path.join(this.data[this.STORAGEDIR_FIELD], this.opts.configName + '.json');
      this.data = Store.parseDataFile(userDataPath, this.opts.defaults);
    }
  }

  get(key) {
    this.refresh();
    if (!this.data) {
      return null;
    }
    return this.data[key];
  }

  set(key, val, silent) {
    this.data[key] = val;
    let configFileName = path.join(this.data[this.STORAGEDIR_FIELD], this.opts.configName + '.json');
    if (!silent) {
      fs.writeFileSync(configFileName, JSON.stringify(this.data));
    }
  }

  // convenience methods
  getApiKey() {
    return this.get(this.APIKEY_FIELD);
  }

  setApiKey(value) {
    this.set(this.APIKEY_FIELD, value);
  }

  getCurrentPatchDir() {
    return this.get(this.CURRENTPATCHDIR_FIELD);
  }

  setCurrentPatchDir(value) {
    this.set(this.CURRENTPATCHDIR_FIELD, value);
  }

  getStorageDir() {
    return this.get(this.STORAGEDIR_FIELD);
  }

  setStorageDir(value) {
    this.set(this.STORAGEDIR_FIELD, value, true);
  }

  getPatchId() {
    return this.get(this.PATCHID_FIELD);
  }

  setPatchId(value) {
    this.set(this.PATCHID_FIELD, value);
  }

  // helper methods
  static parseDataFile(filePath, defaults) {
    try {
      let jsonContent = fs.readFileSync(filePath);
      return JSON.parse(jsonContent);
    } catch (error) {
      return defaults;
    }
  }
}

// expose the class
module.exports = Store;
