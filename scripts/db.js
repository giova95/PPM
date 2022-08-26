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

app.post('/new-picture', (req, res)=>{
    pool.getConnection((err, connection)=>{
        if(err) throw err  
        const params = req.body;
        connection.query('INSERT INTO picture SET ?', params,(err, rows)=>{
            connection.release();
            if(!err){
                res.send('Nuova Opera aggiunta');
            }
            else{
                res.send('errore nel caricamento del Quadro');
                console.log(err);
            }
        })
    })
});

app.delete('/:id', (req,res)=>{
    pool.getConnection((err, connection)=>{
        if(err) throw err
        connection.query('DELETE FROM picture WHERE id = ?', [req.params.id], (err,rows)=>{
            connection.release();
            if(!err){
                res.send(`l'opera con id ${[req.params.id]} e' stata rimossa`);
            }
            else{
                console.log(err);
            }
        })
    })
})

app.post('/update-picture', (req,res)=>{
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connesso con id ${connection.threadId}`);
        const {id, title, author, description, date, tags, src} = req.body;
        
        connection.query('UPDATE picture SET title = ?, author = ?, description = ?, date = ?, tags = ?, src = ? WHERE id = ?', [title, author, description, date, tags, src, id], (err,rows)=>{
            connection.release();

            if(!err){
                res.send(`L'opera ${[req.body.title]} e' stata aggiornata`);
            }
            else{
                res.send(`Errore nell' aggiornamento dell'opera`);
                console.log(err);
            } 
        })
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));