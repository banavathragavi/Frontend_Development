const express = require('express');
const fs=require('fs');
const app = express();
app.use(express.json());
const users = require('./users.json');
app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: 'User not found'
        });
    }
    const updatedUser = {
        id: id,
        ...req.body
    };
    users[index] = updatedUser;
    fs.writeFile(
        './users.json',
        JSON.stringify(users, null, 2),
        (err) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error updating user'
                });
            }
            return res.status(200).json({
                message: 'User updated successfully',
                user: updatedUser
            });
        }
    );
});
app.listen(2000, () => {
    console.log('Server is running at http://localhost:2000');
});