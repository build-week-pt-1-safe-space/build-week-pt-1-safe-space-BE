const express = require('express');
const router = express.Router();
const moment = require('moment');

const Messages = require('../../../data/models/messagesModel');

router.get('/', (req, res) => {
    Messages.getAllMes()
            .then(messages => {
                res.status(200).json(messages);
            })
            .catch(err => {
                res.status(500).json(err);
            });
});
  
router.post('/', (req, res) => {
    const message = req.body;
  
    message.created_at = moment().format('HH:mm');
    message.send_time = moment().add(2, 'minutes').format('HH:mm');

    Messages.addMes(message)
            .then(message => {
                res.status(200).json(message);
            })
            .catch(err => {
                res.status(500).json(err);
            });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Messages.getUserMes(id)
            .then(message => {
                res.status(200).json(message);
            })
            .catch(err => {
                res.status(500).json(err);
            });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;

    Messages.editMes(id, req.body)
            .then(update => {
                res.status(200).json(update);
            })
            .catch(err => {
                res.status(500).json(err);
            });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Messages.deleteMes(id)
            .then(message => {
                console.log('mes', message)
                res.status(200).send(message);
            })
            .catch(err => {
                res.status(500).json(err);
            });
});

module.exports = router;