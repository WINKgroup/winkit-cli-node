'use strict';

const {src, dest} = require('gulp');

const targets = {
    '.env': {
        template: 'env.template'
    }
}


module.exports = function (cliArguments) {
    const appDir = process.cwd();
    const template_dir = __dirname +"/../templates";

    src(template_dir+"/*.js").pipe(dest(appDir)).on('error', (err) => {
        console.log(err);
    });
};