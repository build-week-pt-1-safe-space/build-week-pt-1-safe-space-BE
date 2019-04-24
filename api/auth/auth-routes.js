require('dotenv').config();

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../../data/models/userModel');

//Generates JWT
const genToken = user => {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '6h'
    }

    const secret = process.env.SECRET;

    return jwt.sign(payload, secret, options);
}

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);

    user.password = hash;

    Users.addUser(user)
      .then(added => {
        res.status(201).json({ user });
      })
      .catch(error => {
        res.status(500).json({ error, message: 'Registration Failed' });
      });
});

router.post('/login', (req, res) => {

});

module.exports = router;