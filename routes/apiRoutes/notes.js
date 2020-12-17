const router = require('express').Router();
const bodyParser = require('body-parser');
const {notes} = require('../../data/notes');
const createNewNote = require('../../lib/noteFunctions');
let jsonParser = bodyParser.json();


router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', jsonParser, (req, res) => {
    console.log('inside post req handler')
    console.log('req body: ', req.body)
    createNewNote(req.body, notes);
    res.send(req.body);
});


module.exports = router;