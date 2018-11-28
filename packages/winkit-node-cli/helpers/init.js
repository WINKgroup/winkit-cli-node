'use strict';

const {src, dest} = require('gulp');


module.exports = function (cliArguments) {
    const appDir = process.cwd();
    const template_dir = __dirname +"/../templates";

    src(template_dir+"/*").pipe(dest(appDir)).on('error', (err) => {
        console.log(err);
    });
};