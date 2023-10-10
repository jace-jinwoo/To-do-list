const express = require('express')
const mysql = require('mysql2')
const dbconfig = require('./database.js')
const connection = mysql.createConnection(dbconfig)

const app = express()

// connection.connect()

app.set('port', process.env.PORT || 3000)
app.get('/', (req, res) => {
    console.log("req:: ", req.url)
    let query = "SELECT * FROM TODOS"
    // let query = "INSERT INTO todos (todo, due) VALUES ('test1', '231231');"
    
    connection.query(query, (err, results, fields) => {
        if (err) console.log('err :: ', err)
        res.send(results)
        console.log('results :: ', results)
    })
})

// connection.end()

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`))