const Messages = require('../messagesModel');
const db = require('../../dbConfig');

beforeEach(async () => {
    return await db('messages').truncate();
});

const test_messages = [
    {
        user_id: 1,
        body: 'Dont worry, Be Happy',
        created_at: '4pm',
        send_time: '6pm'
    },
    {
        user_id: 2,
        body: 'Ah What a Beautiful Day!',
        created_at: '2am',
        send_time: '6am'
    },
]

describe('MESSAGES MODEL', () => {

    describe('getAllMes()', () => {

        it('should return an empty array if no messages in database', async () => {
            const messages = await Messages.getAllMes();

            expect(Array.isArray(messages)).toBe(true);
            expect(messages.length).toBe(0);
        });

        it('should return all messages in the database', async () => {
            await db('messages').insert(test_messages);

            const messages = await Messages.getAllMes();

            expect(messages.length).toBe(2);
            expect(messages[0].body).toBe('Dont worry, Be Happy');
            expect(messages[1].user_id).toBe(2);
        });
    });

    describe('getUserMes()', () => {

        it('should return an array of messages that correspond with user_id', async () => {
            await db('messages').insert(test_messages);

            const userMessages = await Messages.getUserMes(1);

            expect(Array.isArray(userMessages)).toBe(true);
            expect(userMessages.length).toBe(1);
            expect(userMessages[0].created_at).toBe('4pm');
        });

        it('should return an empty array if no messages found', async () => {
            const userMessages = await Messages.getUserMes(1);

            expect(Array.isArray(userMessages)).toBe(true);
            expect(userMessages.length).toBe(0);
        });
    });

    describe('addMes()', () => {

        it('should add a message to the database', async () => {
            await Messages.addMes(test_messages[0]);

            const messages = await db('messages');

            expect(messages.length).toBe(1);
            expect(messages[0].body).toBe('Dont worry, Be Happy');
        });

        it('should return the added message', async () => {
            const user = await Messages.addMes(test_messages[0]);

            expect(user[0].id).toBe(1);
            expect(user[0].created_at).toBe('4pm');
        });
    });

    describe('editMes()', () => {

        it('should edit message fields that have changed', async () => {
           await db('messages').insert(test_messages);
           
           const update = { body: 'Its allll gooood' }
           const updatedMessage = await Messages.editMes(1, update);

            expect(updatedMessage[0].body).toBe('Its allll gooood');
            expect(updatedMessage[0].id).toBe(1);
            expect(updatedMessage[0].created_at).toBe('4pm');
        });

        it('should return the message if no changes found', async () => {
            await db('messages').insert(test_messages);
           
            const update = {}
            const updatedMessage = await Messages.editMes(1, update);
 
             expect(updatedMessage[0].body).toBe('Dont worry, Be Happy');
             expect(updatedMessage[0].id).toBe(1);
             expect(updatedMessage[0].created_at).toBe('4pm');
        });
    });

    describe('deleteMes()', () => {

        it('should delete message from database by id', async () => {
            await db('messages').insert(test_messages);
            await Messages.deleteMes(1);

            const messages = await db('messages');

            expect(messages.length).toBe(1);
            expect(messages[0].id).toBe(2);
        });

        it('should return the deleted message', async () => {
            await db('messages').insert(test_messages);
            const message = await Messages.deleteMes(1);

            expect(message[0].id).toBe(1);
            expect(message[0].created_at).toBe('4pm');
        });
    });
});