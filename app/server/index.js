const express = require('express');
const bp = require('body-parser');
const mysql = require('mysql');
const moment = require('moment');

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

app.get('/', (req, res) => {
  console.log('\n\n get request \n\n');
  res.send();
});

app.post('*', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  // login
  if (req.body.type === 'login') {
    const qry = 'SELECT users.password FROM users WHERE users.username =' + `'${username}'`;
    console.log('\n> POST', '\n> LOGIN / Get Password From DB');
    console.log('> Using -->', '"'+qry+'"');
    connect.query(qry, (err, data) => {
      if(err || data.length === 0) {
        console.log('\n> !ERR || No Data', '\n> ERR -->', err, '\n> DATA -->', data);
        res.status(201).send();
      } else {
        console.log('\n> SUCCESS', '\n> DATA -->', data);
        if(data[0].password === password) {
          console.log('> Password Does Match :)');
          res.status(200).send();
        } else {
          console.log('> Password Does Not Match :(');
          res.status(201).send();
        }
      }
    })
  }

  // signup
  else if (req.body.type === 'signup') {
    const qry = `INSERT INTO users VALUES (0,'${username}','${password}')`; 
    console.log('\n> POST', '\n> SIGNUP / DB');
    console.log('> Using -->', '"'+qry+'"');
    connect.query(qry, (err, data) => {
        if(err) {
        console.log('\n> !ERR', '\n> ERR -->', err);
        console.log('> if err, username already taken');
        res.status(201).send();
      } else {
        console.log('\n> SUCCESS')
        res.status(200).send();
      }
    })
  }

  // get all
  else if (req.body.type === 'all') {
    const qry = `SELECT * FROM messages LIMIT 100`;
    console.log('\n> POST', '\n> GET ALL FROM MESSAGES FROM DB');
    console.log('> Using -->', '"'+qry+'"');
    connect.query(qry, (err, data) => {
      if(err || data.length === 0) {
        console.log('\n> !ERR || No Data', '\n> ERR -->', err, '\n> DATA -->', data);
      } else {
        console.log('\n> SUCCESS', '\n> DATA -->', data);
        res.send(data);
      }
    })
  }

  // add message
  else if (req.body.type === 'add') {
    const now = moment().format('YYYY-MM-DD hh:mm:ss');
    const qry = `INSERT INTO messages VALUES (0, ${req.body.username}, ${req.body.message}, '${now}')`;
    console.log('\n> POST', '\n> Add Message To DB');
    console.log('> Using -->', '"'+qry+'"');
    connect.query(qry, (err,data) => {
      if(err) {
        console.log('\n> !ERR', '\n> ERR -->', err);
        console.log('> If Err, DB Insert Failure');
      } else {
        console.log('\n> SECCESS', '\n> Now Getting All Messages');
        newQry = `SELECT * FROM messages LIMIT 100`;
        connect.query(newQry, (err,newData) => {
          if(err || newData.length === 0) {
            console.log('\n> !ERR || No Data', '\n> ERR -->', err, '\n> DATA -->', newData);
          } else {
            console.log('\n> SUCCESS', '\n> DATA -->', newData);
            res.send(newData);
          }
        })
      }
    })
  }
});

app.listen(3000, _=> console.log('Roger Roger 3000'))