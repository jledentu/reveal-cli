#!/usr/bin/env node

'use strict'

require('yargs')
  .commandDir('../commands')
  .demand(1)
  .help()
  .argv;
