'use strict';

var path = require('path');
var exec = require('child_process').exec;
var connect = require('connect');
var serveStatic = require('serve-static');

const PORT = 8080;

let server = connect().use(serveStatic(path.join('dist'))).listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
  console.log(`Generate PDF document...`);

  exec(`phantomjs ./node_modules/reveal.js/plugin/print-pdf/print-pdf.js "http://localhost:${PORT}?print-pdf" test.pdf`, () => {
    console.log(`PDF document successfully created!`);
    server.close();
  });
});

