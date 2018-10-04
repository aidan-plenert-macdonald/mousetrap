const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let conn = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'rootable',
  database: 'mice',
});


/*
 * Basic Rest API functionality through Express.js
 *
 * See https://expressjs.com/en/starter/basic-routing.html
 * for more examples
 *
 */

app.get('/mice', function(req, res) {
  // console.log("hello");
  conn.query('SELECT * FROM mice', function(err, result, fields) {
    if (err) {
      error = err;
      data = result;
      // console.log("41" + err);
    } else {
      res.json(
          result
      );
    }
  });
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/static/jquery',
    express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/static/pivottable', express.static(path.join(__dirname,
    'node_modules/pivottable/dist')));
app.post('/mice', function(req, res) {
  console.log(req.body);
  conn.query('INSERT INTO mice SET ?', [req.body],
      function(err, result, fields) {
        if (err) {
          error = err;
          data = result;
          console.log('DB ERROR: ' + err);
          res.json({
            'status': 'failed',
            'body': err,
            'input': req.body,
          });
        } else {
          console.log('SUCCESS!!!!');
          // var sql = "INSERT INTO mice (name, age, weight) VALUES"
          res.json({
            'status': 'complete',
            'body': 'success',
          });
        }
      });
  // conn.query("INSERT INTO mice VALUES")
});


app.post('/event',function(req,res){
    console.log(req.body);
    res.json(req.body);
});

app.listen(8080, () => console.log('Trapping mice on port 8080'));
