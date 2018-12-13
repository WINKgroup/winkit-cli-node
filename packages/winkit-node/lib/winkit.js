'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {apis, settings, database} = require('./core');

const port = 3000;

class Winkit {

    constructor(){
        this.app = express();
        this.config = {
            appRootDir : process.cwd(),
            configEnv: '.env' //TODO: make configurable
        }

        this.app.use(bodyParser.json());
    }
    async init(){
        await settings.call(this);
        await database.call(this);
        await apis.call(this);
    }

    async start(){
        try {
            await this.init();

            this.app.listen(port, () => {
                console.log(`listening on port ${port}`);
            })
        } catch (error) {
           console.log("Server failed to start : " + error)
        }
    }
}

module.exports = new Winkit();