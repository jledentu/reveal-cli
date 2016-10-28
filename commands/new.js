'use strict';

let generator = require('../lib/presentation-generator');

exports.command = 'new <presentation-name>';

exports.describe = 'create a new presentation';

exports.builder = {};

exports.handler = function (argv) {
  generator(argv['presentation-name']);
};
