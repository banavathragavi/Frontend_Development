const express = require('express');
const fs=require('fs');
const app = express();
app.use(express.json());
const users = require('./users.json');

    app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        ...req.body
    };

    users.push(newUser);

    fs.writeFile(
        './users.json',
        JSON.stringify(users, null, 2),
        (err) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error saving user'
                });
            }

            return res.status(201).json({
                message: 'User created successfully',
                user: newUser
            });
        }
    );
});

app.listen(2000, () => {
    console.log('Server is running at http://localhost:2000');
});