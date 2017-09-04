console.log("Starting Application");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs:', argv);

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note !== undefined){
    console.log(`Note added successfully`);
    console.log(`--`);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }else
    console.log(`note with that title already exists`);
}
else if(command === 'list')
  notes.getAll();
else if(command === 'read')
  notes.readNote(argv.title);
else if(command === 'remove')
  notes.deleteNote(argv.title);
else
  console.log('Command not found');
