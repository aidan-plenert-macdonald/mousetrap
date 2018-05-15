var express = require('express')
var mysql = require('mysql')

var app = express()
var conn = mysql.createConnection({
    host: 'database',
    user: 'user',
    password: 'password',
    database: 'mice'
})

//conn.connect()

/*
 * Basic Rest API functionality through Express.js
 *
 * See https://expressjs.com/en/starter/basic-routing.html
 * for more examples
 *
 */

app.get('/mice', function (req, res) {
    res.json([
	{
	    "name": "Henry",
	    "age": "1"
	}
    ])
})

app.post('/mice', function (req, res) {
    res.json({
	"status": "complete",
	"body": req
    })
})

app.listen(8080, () => console.log('Trapping mice on port 8080'))
