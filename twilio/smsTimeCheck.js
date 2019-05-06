const moment = require('moment');
const sendSms = require('./smsConfig');

const db = require('../data/models/userModel');

module.exports = message => {
    console.log(moment().format('HH:mm'));
    console.log(message.send_time === moment().format('HH:mm'));
    // message.send_time === moment().format() ? sendSms(message)
    //                                         : null;

    if(message.send_time === moment().format('HH:mm')) {
        console.log('enter');
        sendSms(message);

    } else {
        return;
    }
}