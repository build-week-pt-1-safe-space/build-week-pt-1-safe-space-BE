const request = require('supertest');
const server = require('../../server');

const db = require('../../../data/dbConfig');
const Messages = require('../../../data/models/messagesModel');

const initialize = async () => {
    await db('messages').truncate();
    await db('messages').insert(test_messages);
}

beforeEach(() => {
    return initialize();
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

describe('MESSAGES ROUTE', () => {

    describe('/messages', () => {

        describe('GET', () => {

            it('should respond with all the messages in the db as a json packet with status 200', async () => {
                const res = await request(server).get('/api/messages');
    
                expect(res.status).toBe(200);
                expect(res.type).toBe('application/json');
                expect(res.body.length).toBe(2);
            }); 
        });

        describe('POST', () => {

            it('should add a message to the database', async () => {
                const newMessage = {
                                user_id: 1,
                                body: 'You Got This!',
                                created_at: '3pm',
                                send_time: '8pm'
                        }

                await request(server).post('/api/messages')
                                     .send(newMessage);

                const res = await Messages.getAllMes();
     
                expect(res.length).toBe(3);
            });
        });
    });

    describe('/messages/:id', () => {

        describe('GET', () => {
           
            it('should return a single message', async () => {
                const res = await request(server).get('/api/messages/1');

                expect(res.body.length).toBe(1);
            });

            it('should return the message that corresponds with the ID', async () => {              
                const res = await request(server).get('/api/messages/2');

                expect(res.body[0].id).toBe(2);
            });
        });

        describe('PUT', () => {
            
            it('should update an existing message', async () => {
                const update = { body: 'Howdy Pardner' };

                const res = await request(server).put('/api/messages/1')
                                                 .send(update);

                expect(res.body[0].body).toBe('Howdy Pardner');                                 
            });
        });
    });
});