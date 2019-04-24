const Messages = require('../messagesModel');
const db = require('../../dbConfig');

beforeEach(() => {
    return db('messages').truncate();
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
});