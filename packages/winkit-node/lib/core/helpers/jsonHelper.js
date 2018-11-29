
const fs = require('fs');

module.exports = {
    readJson: function (f) {
        return JSON.parse(fs.readFileSync(f, 'utf8'));
    },
    writeJson: function (f, contents) {
    }
}