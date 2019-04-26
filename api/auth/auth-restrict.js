require('dotenv').config();

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //Requires JWT to continue route
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
            if(err) {
                res.status(403).json({ message: 'Failure To Authenticate' });
            } else {
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'Invalid Credentials' });
    }
}