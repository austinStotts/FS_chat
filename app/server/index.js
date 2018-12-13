const express = require('express');
const bp = require('body-parser');

// initialize app
const app = express();

// use
app.use(bp.json({strict:false}));
app.use(express.static('output'));

app.get('*', (req, res) => {

});

app.post('*', (req, res) => {

});

app.listen(3000, _=> console.log('Roger Roger 3000'))