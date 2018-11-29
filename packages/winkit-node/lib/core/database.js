const mongoose = require('mongoose');

module.exports = function () {

    return new Promise( async (resolve, reject) => {
        try {
            await mongoose.connect(this.config.settings.databaseUrl);
            resolve();
        }catch(err){
            reject(err)
        }
    });
};