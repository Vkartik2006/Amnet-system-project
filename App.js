import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const register = async () => {
    await axios.post('http://localhost:4000/register', { username, password });
    alert('Registration successful');
  };

  const login = async () => {
    const response = await axios.post('http://localhost:4000/login', { username, password });
    setToken(response.data.token);
    alert('Login successful');
  };

  const fetchProfile = async () => {
    const response = await axios.get('http://localhost:4000/profile', {
      headers: { Authorization: Bearer ${token} },
    });
    setMessage(response.data.message);
  };

  return (
    <div>
      <h1>Auth System</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={fetchProfile}>Get Profile</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;