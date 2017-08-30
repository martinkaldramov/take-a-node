console.log("Starting Application");

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];

console.log('Command: ', command);

if(command === 'add')
  console.log('Adding a note');
else if(command === 'list')
  console.log('Listing all notes');
else if(command === 'read')
  console.log('Reading a specific note');
else if(command === 'delete')
  console.log('Deleting a specific note');
else
  console.log('Command not found');
