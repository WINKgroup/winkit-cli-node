const generator = require("../lib/generator");
const _ = require('lodash');

const targets = {
    ':appFolder/api/:folderName/controller.js':{
        template: 'controller.template'
    },
    ':appFolder/api/:folderName/views.js':{
        template: 'views.template'
    },
    ':appFolder/api/:folderName/model.js':{
        template: 'model.template'
    }
};


module.exports = function (name, cliArgs) {
    const appFolder = process.cwd();
    const template_dir = __dirname +"/../templates/api";

    const modelName  = _.startCase(name);

    const scope = {
        appFolder : appFolder,
        folderName : name,
        modelName: modelName,
        templateFolder: template_dir,
        templateOptions: { modelName : modelName}
    };

    generator(targets, scope, (err) => {
        console.log(err);
    });
};