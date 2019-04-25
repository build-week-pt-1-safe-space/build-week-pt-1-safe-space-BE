const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes/userRoutes');
const messagesRoutes = require('./messageRoutes/messageRoutes');

router.use('/users', userRoutes);
router.use('/messages', messagesRoutes);

module.exports = router;