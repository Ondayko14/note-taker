const router = require('express').Router();
const bodyParser = require('body-parser');
const {notes} = require('../../data/notes');
const createNewNote = require('../../lib/noteFunctions');
// console.log(notes);
let jsonParser = bodyParser.json();


router.get('/notes', (req, res) => {
    let results = notes;
    // if(req.query) {
    //     results = filterByQuery(req.query, results);
    // }
    // console.log(results);
    res.json(results);
});

router.post('/notes', jsonParser, (req, res) => {
    console.log('inside post req handler')
    // req.body.id = notes.length.toString();
    console.log('req body: ', req.body)
    createNewNote(req.body, notes);
    res.send(req.body);
});


module.exports = router;