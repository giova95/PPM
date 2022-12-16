const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3307;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myApp'
})

app.get('', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log('connessione a ID ' + connection.threadId)
        connection.query('SELECT * from picture', (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
            console.log(rows);
        })
    })
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});
var upload = multer({ storage: storage });

app.post('/new-picture', upload.single('src'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send({ message: 'Please upload a file.' });
    }
    pool.getConnection((err, connection) => {
        const { title, author, description, tags, date} = req.body;
        const src = "scripts/" + req.file.path;
        connection.query('INSERT INTO picture SET title = ?, author = ?, description = ?, date = ?, tags = ?, src = ?', [title, author, description, date, tags, src], (err, rows) => {
            connection.release();
            if (!err) {
                res.redirect('http://localhost:8080/PPM-main/confirm-new.html');
            }
            else {
                res.send('errore nel caricamento del Quadro');
                console.log(err);
            }
        })
    })
});

app.delete('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('DELETE FROM picture WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release();
            if (!err) {
                res.send(`l'opera con id ${[req.params.id]} e' stata rimossa`);
            }
            else {
                console.log(err);
            }
        })
    })
})

app.post('/update-picture', upload.single('src') ,(req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send({ message: 'Please upload a file.' });
    }
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connesso con id ${connection.threadId}`);
        const { id, title, author, description, date, tags } = req.body;
        const src = "scripts/" + req.file.path;
        connection.query('UPDATE picture SET title = ?, author = ?, description = ?, date = ?, tags = ?, src = ? WHERE id = ?', [title, author, description, date, tags, src, id], (err, rows) => {
            connection.release();

            if (!err) {
                res.redirect('http://localhost:8080/PPM-main/confirm-update.html');
            }
            else {
                res.send(`Errore nell' aggiornamento dell'opera`);
                console.log(err);
            }
        })
    })
});

app.post('/tags', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connesso con id ${connection.threadId}`);
        const { id, tags } = req.body;
        connection.query('UPDATE picture SET tags = ? WHERE id = ?', [ tags, id], (err, rows) => {
            connection.release();
            if (!err) {
                console.log("sono arrivato qui");
                res.send(`Inserimento dei tags avvenuto con successo`)
            }
            else {
                res.send(`Errore nell' inserire i tags`);
                console.log(err);
            }
        })
    })
});



app.listen(port, () => console.log(`Listening on port ${port}`));