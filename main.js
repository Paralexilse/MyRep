const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const read = require('node-readability')
const sqlite3 = require('sqlite3').verbose();

const script = require('./src/script.js');

// Устанавливаем колбэк функцию для регистрации
script.setRegisterCallback(function(name, pass) {
console.log(name, pass);
});

const db = new sqlite3.Database('./my.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);

    console.log('Подключение успешно')
});

// db.run(
//    `CREATE TABLE users(
//     name, 
//     password, 
//     words_per_second, 
//     error_percentage,
//     printed_words,
//     id integer PRIMARY KEY AUTOINCREMENT)`
// );

// db.run(
//    `CREATE TABLE tasks(
//     title, 
//     text, 
//     difficulty_level,
//     id integer PRIMARY KEY AUTOINCREMENT)`
// );

// const sql = `INSERT INTO tasks (title, text, difficulty_level, id) 
//         VALUES(?,?,?,?)`;

//     db.run(sql,['Поле','выфшвоыфшщовшщфыовшфыовфыврфгрв','Сложный'], (err) => {
//         if (err) return console.error(err.message);

//         console.log('Новое задание создано');
//     });


//db.run(`ALTER TABLE tasks ADD COLUMN id`);

//  const sql = `INSERT INTO users (name, password, words_per_second, error_percentage, printed_words, id) 
//         VALUES(?,?,?,?,?,?)`;

//    db.run(sql,['Artem','56544asd1','0','0','0'], (err) => {
//         if (err) return console.error(err.message);

//        console.log('Новый пользователь создан');
//    });

// const sql = `SELECT * FROM users`

// db.all(sql,[], (err, rows)=>{
//     if (err) return console.error(err.message);

//     rows.forEach((row)=>{
//         console.log(row);
//     });
// });

// db.run(`ALTER TABLE users ADD PRIMARY KEY (id)`);

//  db.run('DROP TABLE users');

db.close((err) => {
    if (err) return console.error(err.message);
});


app.set('view engine', 'ejs')
app.use(express.static('src'))


app.get('/', (req, res) => {
    res.render('train')
})

app.get('/reg', (req, res) => {
    res.render('reg')
})

app.get('/log', (req, res) => {
    res.render('log')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.get('/tasks', (req, res) => {
    res.render('tasks')
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})



