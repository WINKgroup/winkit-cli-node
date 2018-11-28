'use strict';

const app = require('express')();

const port = 3000;

class Winkit {

    async start(){
        app.listen(port, () =>{
            console.log(`listening on port ${port}`);
        })
    }
}

module.exports = new Winkit();