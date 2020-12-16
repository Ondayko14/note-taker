const path = require('path');
const router = require('express').Router();

router.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (_req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;