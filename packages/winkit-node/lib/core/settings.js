'use strict';

const dotenv = require('dotenv');
const path = require("path");


module.exports = function () {
    return new Promise( ((resolve, reject) => {
        let configPath = path.resolve(this.config.appRootDir, 'config', this.config.configEnv);

        let result = dotenv.config( {path : configPath });

        if (result.error) {
            reject(result.error)
        }

        Object.assign(this.config, result.parsed);

        resolve();
    }));
};