const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// ตั้งค่า MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vue_auth'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// API สำหรับการลงทะเบียน
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;

    const user = { username, email, password: hash };
    const sql = 'INSERT INTO users SET ?';

    db.query(sql, user, (err, result) => {
      if (err) throw err;
      res.send('User registered');
    });
  });
});

// API สำหรับการล็อกอิน
app.post('/login', (req, res) => {
  const { login, password } = req.body;

  // ตรวจสอบว่า login เป็น username หรือ email
  const sql = 'SELECT * FROM users WHERE username = ? OR email = ?';
  db.query(sql, [login, login], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      bcrypt.compare(password, results[0].password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          res.send('Login successful');
        } else {
          res.status(401).send('Password incorrect');
        }
      });
    } else {
      res.status(404).send('User not found');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
