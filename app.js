const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions =  {
  describe: 'The title of the note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: 'The body of the note (description)',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all the notes')
  .command('read', 'Read a single note', {
    title: titleOptions
  })
  .command('remove', 'Reamove a specific note', {
    title: titleOptions
  })
  .help()
  .argv;

var command = argv._[0];

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log(`Note added successfully`);
    notes.logNote(note);
  }else
    console.log(`note with that title already exists`);
}
else if(command === 'list'){
  var list = notes.getAll();
  console.log(`Printing ${list.length} note(s).`);
  list.forEach((note) => notes.logNote(note));
}
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
