const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 4000;

app.use(express.json());

const users = []; // In-memory user storage
const SECRET_KEY = 'your_secret_key';

// Register a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
});

// Login a user
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Verify the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  // Generate a JWT token
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
});

// Protected route
app.get('/profile', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: Welcome ${decoded.username} });
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(Auth System running at http://localhost:${PORT});
});