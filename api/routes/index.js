const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes/userRoutes');
const messagesRoutes = require('./messageRoutes/messageRoutes');

const restrict = require('../auth/auth-restrict');

router.use('/users', restrict, userRoutes);
router.use('/messages', restrict, messagesRoutes);

module.exports = router;