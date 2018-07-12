var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var conn = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'rootable',
    database: 'mice'
});




/*
 * Basic Rest API functionality through Express.js
 *
 * See https://expressjs.com/en/starter/basic-routing.html
 * for more examples
 *
 */

 app.get('/mice', function (req, res) {
    var error;
    var data;
    console.log("hello");
    conn.query("SELECT * FROM mice", function (err, result, fields) {
        if (err) {
            error = err;
            data = result;
            console.log("41" + err);

        }
        else {
            res.json(
        result
        );
        }
    });

});

app.use('/public', express.static(path.join(__dirname, 'public')));

app.post('/mice', function (req, res) {
    conn.query('INSERT INTO mice SET ?', req.data, function(err, result, fields) {
        if (err) {
            error = err;
            data = result;
            console.log("" + err);
              res.json({
                "status": "failed",
                "body": err, "input": req.data 
             });
        }
        else{
            console.log("SUCCESS!!!!");
            //var sql = "INSERT INTO mice (name, age, weight) VALUES"
            res.json({
                "status": "complete",
                "body": "success"
             });
        }
    });
    //conn.query("INSERT INTO mice VALUES")

});

app.listen(8080, () => console.log('Trapping mice on port 8080'));
