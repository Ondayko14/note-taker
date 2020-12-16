const router = require('express').Router();
const {notes} = require('../../data/notes');
console.log(notes);

router.get('/notes', (req, res) => {
    let results = notes;
    // if(req.query) {
    //     results = filterByQuery(req.query, results);
    // }
    console.log(results);
    res.json(results);
});


module.exports = router;