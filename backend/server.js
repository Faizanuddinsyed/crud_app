
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Add new user
app.post('/users', (req, res) => {
  const { name, email, phone } = req.body;
  db.query(
    'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)',
    [name, email, phone],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, name, email, phone });
    }
  );
});

// Update user
app.put('/users/:id', (req, res) => {
  const { name, email, phone } = req.body;
  const { id } = req.params;
  db.query(
    'UPDATE users SET name=?, email=?, phone=? WHERE id=?',
    [name, email, phone, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id, name, email, phone });
    }
  );
});

// Delete user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User deleted' });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
