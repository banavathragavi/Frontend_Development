const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    res.send('Get all users');
});

app.post('/users', (req, res) => {
    const user = req.body;
    res.send(`User created: ${JSON.stringify(user)}`);
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ${id} updated completely`);
});

app.patch('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ${id} updated partially`);
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`User ${id} deleted`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});