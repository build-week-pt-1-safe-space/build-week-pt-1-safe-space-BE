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

router.post('/register', async (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);

    user.password = hash;

    //User Sends All Required Information
    if(user.first_name && user.last_name &&
        user.email && user.password &&
        user.phone) {
   
        //Check if User Already Exists
        const userExists = await Users.getUserByEmail(user.email);

        if(userExists && userExists.length) {

            res.status(409).json({ message: "Account Exists For Email" });

        } else {
            //Register User
            Users.addUser(user)
                .then(added => {
                    res.status(201).json({ user });
                })
                .catch(error => {
                    res.status(500).json({ error, message: 'Registration Failed' });
                });
        }

    } else {
        res.status(406).json({ error: "Missing Field" });
    }
});

router.post('/login', (req, res) => {

});

module.exports = router;