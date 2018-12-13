const {pathRegexp} = require("../lib/util");
const _ = require('lodash');

const templater = require('./templater');
/**
 * From Strapi core: (MIT License)
 *
 * Inspired by Strapi
 *
 */

module.exports = (targets, scope, cb) => {

    Object.keys(targets).forEach( (keyPath) => {
        const params = [];

        pathRegexp(keyPath, params);

        let err;

        const parsedKeyPath = _.reduce(params, (memoKeyPath, param) => {
            if (err) {
                return false;
            }

            try {
                const paramMatchExpr = ':' + param.name;
                let actualParamValue = scope[param.name];
                if (!actualParamValue) {
                    err = new Error(
                        'generator error:\n' +
                        'A scope variable (`' + param.name + '`) was referenced in target: `' + memoKeyPath + '`,\n' +
                        'but `' + param.name + '` does not exist in the generator\'s scope.'
                    );
                    return false;
                }
                actualParamValue = String(actualParamValue);

                return memoKeyPath.replace(paramMatchExpr, actualParamValue);
            } catch (e) {
                err = new Error('Error: Could not parse target key ' + memoKeyPath);
                err.message = e;
                return false;
            }
        }, keyPath);

        if (!parsedKeyPath) {
            return cb(err);
        }

        const targetData = targets[keyPath];

        if ( _.has(targetData, 'template')){

            let templateOptions = Object.assign({}, scope.templateOptions);
            templateOptions['templatesDirectory'] = scope.templateFolder;
            templateOptions['destination'] = parsedKeyPath;

            templater(targetData.template, templateOptions, cb);
        }
    });
};