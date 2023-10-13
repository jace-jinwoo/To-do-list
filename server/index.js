const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const config = require('./config/key')
const connection = mysql.createConnection(config?.dbconfig)

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 5000)
app.get('/', (req, res) => {
    let query = "SELECT * FROM TODOS"
    
    connection.query(query, (err, results, fields) => {
        if (err) console.log('err :: ', err)
        res.json(results)
        console.log('results :: ', results)
    })
})

app.post('/api/login', (req, res) => {
    console.log("req :: ", req.body)
    // let query = `SELECT * FROM TODOS WHERE todo='${req.body.username}' AND due='${req.body.password}'`
    let query = "SELECT * FROM TODOS WHERE todo='jin' AND due='123'"

    connection.query(query, (err, user, fields) => {
        if (err) console.log('err :: ', err)
        console.log('user :: ', user)

        if (!user.length) {
            return res.json({
                loginSuccess: false,
                message: '일치하는 계정이 없습니다.'
            })
        }

        if (user.length > 1) {
            throw new Error('DB에 동일한 ID가 존재')
        }
        
        res.json({
            loginSuccess: true,
            message: '로그인 되었습니다.',
            data: user
        })
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