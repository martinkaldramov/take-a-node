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
  if(note){
    console.log(`Note added successfully`);
    notes.logNote(note);
  }else
    console.log(`note with that title already exists`);
}
else if(command === 'list')
  notes.getAll();
else if(command === 'read'){
  var note = notes.readNote(argv.title);
  if(note){
    console.log(`Note found`); 
    notes.logNote(note);
  }else{
    console.log('Note not found. Pelase try again');
  }
}
else if(command === 'remove'){
  var noteRemoved = notes.deleteNote(argv.title);
  var message = noteRemoved ? 'Note Successfully removed' : 'Note not found';
  console.log(message);
}
else
  console.log('Command not found');
