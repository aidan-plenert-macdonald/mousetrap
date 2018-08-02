const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('mysql');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//  conn.connect()

/*
 * Basic Rest API functionality through Express.js
 *
 * See https://expressjs.com/en/starter/basic-routing.html
 * for more examples
 *
 */

app.get('/mice', function(req, res) {
    res.json([
    {
        'name': 'Henry',
        'age': '1',
    },
    ]);
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/static/jquery',
    express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use('/static/pivottable',
    express.static(path.join(__dirname, 'node_modules/pivottable/dist')));
app.post('/mice', function(req, res) {
    res.json({
        'status': 'complete',
        'body': req.body,
    });
});

app.listen(8080, function() {
console.log('Trapping mice on port 8080');
});
