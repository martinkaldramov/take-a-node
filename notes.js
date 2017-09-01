var addNote = (title, body) => {
  console.log('Adding note', title, body);
}

var getAll = () => {
  console.log('Listing all notes');
}

var readNote = (title) => {
  console.log('Reading note with title', title);
}

var deleteNote = (title) => {
  console.log('deleting note', title);
}

module.exports = {
  addNote,
  getAll,
  readNote,
  deleteNote 
}
