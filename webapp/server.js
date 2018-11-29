const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * For renewable connections
 * @return {Connection} MariaDB/MySQL connection
 */
function conn() {
  var connection =mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'rootable',
    database: 'mice',
  }, function(err) {
    if (err) {
      throw err;
    }
  });
  connection.connect(function(err){
    if(err){
      sleep(1);
      connection = conn();
    }
  });
  return
}


/**
 * Generates a function to insert to a table
 * @param {String} tablename
 * @return {function} Inserts tablename
 */
function tableInserter(tablename) {
  return function(req, res) {
    conn().query('INSERT INTO ' + tablename + ' SET ?', [req.body],
    function(err, result, fields) {
      if (err) {
        throw err;
        error = err;
        data = result;
        console.log('DB ERROR: ' + err);
        res.status(err.status || 500).json({
          'status': 'failed',
          'body': err,
          'input': req.body,
        });
      } else {
        console.log('SUCCESS!!!!');
        res.json({
          'status': 'complete',
          'body': 'success',
        });
      }
    });
  };
}

/*
* Basic Rest API functionality through Express.js
*
* See https://expressjs.com/en/starter/basic-routing.html
* for more examples
*
*/

app.get('/mice', function(req, res) {
  // console.log("hello");
  conn().query('SELECT * FROM mice', function(err, result, fields) {
    if (err) {
      throw err;
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
  'node_modules/pivottable/dist'))
);
app.post('/mice', tableInserter('mice'));


  app.post('/events', tableInserter('events'));

  app.listen(8080, () => console.log('Trapping mice on port 8080'));
