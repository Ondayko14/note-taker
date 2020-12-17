const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArray) {
    const note = body;
    note.id = noteArray.length.toString();
    noteArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify({notes: noteArray}, null, 2)
    );
    return note;
};

module.exports = createNewNote;