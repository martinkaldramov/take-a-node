console.log("Starting Application");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var command = process.argv[2];

const argv = yargs.argv;
console.log('Command: ', command);
console.log('Yargs:', argv);

if(command === 'add')
  notes.addNote(argv.title, argv.body)
else if(command === 'list')
  notes.getAll();
else if(command === 'read')
  readNote(argv.title);
else if(command === 'delete')
  deleteNote(argv.title);
else
  console.log('Command not found');
