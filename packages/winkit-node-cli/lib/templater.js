const path = require("path");
const fs = require("fs-extra");
const _ = require('lodash');


module.exports = function (template, options, cb) {

    const absTemplatePath = path.join(options.templatesDirectory, template);

    fs.readFile(absTemplatePath, 'utf8', (err, contents) => {
        if (err) {
            err = err instanceof Error ? err : new Error(err);
            err.message = `Template error: ${err.message}`;
            err.path = absTemplatePath;
            return cb(err);
        }

        try {
            const compiled = _.template(contents, {
                interpolate: /<%=([\s\S]+?)%>/g
            });
            contents = compiled(options);

            // With Lodash templates, HTML entities are escaped by default.
            // Default assumption is we don't want that, so we'll reverse it.
            if (!options.escapeHTMLEntities) {
                contents = _.unescape(contents);
            }

        } catch (e) {
            return cb(e);
        }

        fs.outputFile(options.destination, contents, cb);
    });
};