'use strict';

const dotenv = require('dotenv');
const path = require("path");
const fs = require('fs');


module.exports = function () {
    return new Promise( ((resolve, reject) => {
        let configPath = path.resolve(this.config.appRootDir, 'config', this.config.configEnv);
        let settingsPath = path.resolve(this.config.appRootDir, 'config', 'settings.json');

        let result = dotenv.config( {path : configPath });

        if (result.error) {
            reject(result.error)
        }

        Object.assign(this.config, result.parsed);

        let settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));

        this.config.settings = {}
        Object.assign(this.config.settings, settings);

        resolve();
    }));
};