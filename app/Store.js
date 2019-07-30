const electron = require('electron');
const path = require('path');
const fs = require('fs');

class Store {

  constructor() {
    this.MAIN_CONFIG_NAME = 'daplaya-preferences';
    this.APIKEY_FIELD = 'apiKey';
    this.PATCHID_FIELD = 'patchId';
    this.CURRENTPATCHDIR_FIELD = 'currentPatchDir';

    this.opts = {};
    this.opts.defaults = {};
    this.opts.configName = this.MAIN_CONFIG_NAME;
    this.opts.defaults[this.APIKEY_FIELD] = null;
    this.opts.defaults[this.PATCHID_FIELD] = null;
    this.opts.defaults[this.CURRENTPATCHDIR_FIELD] = null;
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

  getCurrentPatchDir() {
    return this.get(this.CURRENTPATCHDIR_FIELD);
  }

  setCurrentPatchDir(value) {
    this.set(this.CURRENTPATCHDIR_FIELD, value);
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
