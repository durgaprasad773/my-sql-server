const express = require('express');
const db = require('./db');  

const app = express();
app.use(express.json());


app.get('/users', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


app.post('/users', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password]
    );
    res.status(201).json({ id: result.insertId, username, email });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
