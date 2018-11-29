
const path = require("path");
const {readJson} = require('./helpers/jsonHelper')

const buildRoute = require('./helpers/routeHelper');

module.exports = function () {

    return new Promise( (resolve,reject )=> {
        console.log("Loading apis");
        let apiRoot = path.resolve(this.config.appRootDir, 'api');

        this.config.settings.apis.forEach( (api) =>{
            let apiFolder = path.resolve(apiRoot, api );
            let apiConfig = readJson(path.resolve(apiFolder, "config.settings.json"));


            let apiHandlers = {
                controller: require(path.resolve(apiFolder, 'controller.js')),
                model: require(path.resolve(apiFolder, 'model.js')),
                views: require(path.resolve(apiFolder, 'views.js')),
            };

            const router = require('express').Router({});

            apiConfig.routes.forEach( route => {
                buildRoute(route,router, apiHandlers);
            });

            this.app.use("/"+apiConfig.urlPrefix, router);
        });

        resolve();
    });
};