const express = require('express');
const bp = require('body-parser');
const mysql = require('mysql');

// initialize app
const app = express();
const connect = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '00000000',
  database : 'chat'
})

// use
app.use(bp.json({strict:false}));
app.use(express.static('output'));

app.get('*', (req, res) => {

});

app.post('*', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  // login
  if(req.body.type === 'login') {
    const qry = 'SELECT users.password FROM users WHERE users.username =' + `'${username}'`
    connect.query(qry, (err, data) => {
      if(err || data.length === 0) {
        console.log('ERROR ERROR');
        res.status(201).send();
      } else {
        if(data[0].password === password) {
          res.status(200).send();
        } else {
          res.status(201).send();
        }
      }
    })
  }

  // signup
  else if(req.body.type === 'signup') {
    const qry = `INSERT INTO users VALUES (0,'${username}','${password}')` 
    connect.query(qry, (err, data) => {
        if(err) {
          res.status(201).send();
      } else {
        res.status(200).send();
      }
    })
  }
});

app.listen(3000, _=> console.log('Roger Roger 3000'))