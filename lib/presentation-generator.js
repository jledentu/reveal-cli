'use strict';

let path         = require('path');
let fs           = require('fs-extra');
let spawn        = require('cross-spawn');
let childProcess = require('child_process');
let chalk        = require('chalk');

module.exports = function (name) {
  if (!name) {
    console.log(chalk.red('Please define a name for the new presentation'));
    return;
  }

  fs.copy(path.join(__dirname, '../templates/presentation'), name, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(chalk.green('Presentation created!'));

    console.log('Install npm dependencies...');

    /*let install = childProcess.exec('npm install', function (error, stdout, stderr) {
      if (error) {
        console.log(error);
        console.log('npm dependencies installed');
      }
    });*/

    let install = spawn('npm', ['install'], {
      stdio: 'inherit',
      cwd: path.resolve(name)
    }, function (err) {
      if (err) {
        console.log(error);
      }

      console.log('npm dependencies installed');
    });
  })
};
