const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.use('/', htmlRoutes);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API serve now on port ${PORT}`);
});