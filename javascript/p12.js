const express = require('express');
const app = express();
const users = require('./users.json');

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Done!' });
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({
            message: `User with id ${id} does not exist`
        });
    }
    return res.status(200).json(user);
});

app.listen(2000, () => {
    console.log('Server is running at http://localhost:2000');
});