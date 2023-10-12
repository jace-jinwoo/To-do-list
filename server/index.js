const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const config = require('./config/key')
const connection = mysql.createConnection(config?.dbconfig)

console.log("config :: ", config)
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 5000)
app.get('/', (req, res) => {
    let query = "SELECT * FROM TODOS"
    
    connection.query(query, (err, results, fields) => {
        if (err) console.log('err :: ', err)
        res.send(results)
        console.log('results :: ', results)
    })
})

app.post('/register', (req, res) => {
    
    console.log("body :: ", req.body)
    if (req.body?.id && req.body?.password) {
        let query = `INSERT INTO todos (todo, due) VALUES ('${req.body?.id}', '${req.body?.password}');`
        connection.query(query, (err, results, fields) => {
            if (err) console.log('err :: ', err)
            res.status(200).json({
                success: true 
            })
            console.log('results :: ', results)
        })
    }
    
})

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`))