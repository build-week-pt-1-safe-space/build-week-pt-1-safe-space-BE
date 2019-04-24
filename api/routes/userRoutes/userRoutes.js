const express = require('express');
const router = express.Router();

const Users = require('../../../data/models/userModel');

router.get('/', (req, res) => {
    Users.getAllUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    if(isNaN(Number(id))) {
        res.status(400).json({ message: 'No ID Found' });
    } else {
        Users.getUserById(id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        });
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const edit = req.body;
   
    if(isNaN(Number(id))) {
        res.status(400).json({ message: 'No ID Found' });
    } else {
        Users.editUser(id, edit)
             .then(user => {
                 console.log('user', user);
                res.status(200).json(user);
             })
             .catch(err => {
                res.status(500).json(err);
            });
    }
});

module.exports = router;