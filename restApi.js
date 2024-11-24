const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

// Create a new task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    status: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Read all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const task = tasks.find(task => task.id == id);
  if (task) {
    task.title = title !== undefined ? title : task.title;
    task.status = status !== undefined ? status : task.status;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id != id);
  res.status(204).send();
});

app.listen(port, () => console.log(Server running on http://localhost:${port}));