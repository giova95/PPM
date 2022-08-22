const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3307;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'myApp'
})

app.get('',(req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log('connessione a ID ' + connection.threadId)
        connection.query('SELECT * from picture', (err, rows)=>{
            connection.release();
            if(!err){
                res.send(rows);
            } else {
                console.log(err);
            }
            console.log(rows);
        })
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));