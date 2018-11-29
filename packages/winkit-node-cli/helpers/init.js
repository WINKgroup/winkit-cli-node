'use strict';

const generator = require("../lib/generator");

const targets = {
    'config/.env': {
        template: 'env.template'
    },
    'config/settings.json': {
        template: 'settings.json.template'
    },
    'package.json': {
        template: 'package.json.template'
    },
    'server.js': {
        template: 'server.js.template'
    }
};


module.exports = function (cliArguments) {
    const appFolder = process.cwd();
    const template_dir = __dirname +"/../templates/init";

    const scope = {
        appFolder : appFolder,
        templateFolder: template_dir,
        templateOptions: { appName : "test app"}
    };

    generator(targets, scope, (err) => {
        //console.log(err);
    });
};