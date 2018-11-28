'use strict';

const program = require('commander');

const version = '1.0.0';


program
    .version(version)
    .description("Winkit Node CLI");

program
    .command('init')
    .option('-d, --dev', 'Development mode')
    .description("Init Node Rest project")
    .action(require('./helpers/init'));

program.parse(process.argv);