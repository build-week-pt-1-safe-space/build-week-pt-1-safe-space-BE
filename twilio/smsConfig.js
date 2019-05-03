require('dotenv').config();

const db = require('../data/models/userModel');

const SID = process.env.SID;
const authToken = process.env.KEY;
const twilioNumber = process.env.NUMBER;

const client = require('twilio')(SID, authToken);

const sendSMS = text => {
    console.log('enter 2')
    const id = text.user_id;
    
    db.getUserById(id)
      .then(res => {
        let phone = res[0].phone;

        if(phone[0] !== '+' || phone[1] !== '1') {
            phone[0] === 1 ? phone = `+${phone}`
                           : phone = `+1${phone}`
        }

        console.log(phone);
          
        client.messages
                .create({
                    body: text.body,
                    to: phone,
                    from: twilioNumber
                })
                .then(message => console.log(message));
      })
}

text = {
    id: 1,
    body: 'Hello from Safe Space',
    user_id: 3
}

// sendSMS(text);

module.exports = sendSMS;