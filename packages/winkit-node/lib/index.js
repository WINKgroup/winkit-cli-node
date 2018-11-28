'use strict';

// Starting date
global.startedAt = Date.now();

module.exports = function(global) {
  try {
    return global.winkit = require('./winkit');
  } catch (error) {
    console.log(error);
  }
}.call(this, global);
