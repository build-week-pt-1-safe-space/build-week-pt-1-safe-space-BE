const request = require('supertest');
const server = require('../../server');

const db = require('../../../data/dbConfig');
const Users = require('../../../data/models/userModel');

beforeEach(async () => {
    return await db('users').truncate();
});


const test_users = [
    {  
        email: 'me@gmail.com', 
        first_name: 'Me', 
        last_name: 'Me', 
        password: 'asDASDasdas', 
        phone: "15555555555", 
        profile_pic: 'link', 
        gender: 'M'
    },

    {  
        email: 'alsome@gmail.com', 
        first_name: 'Also', 
        last_name: 'Me', 
        password: 'asDASDasdas', 
        phone: "15555555555", 
        profile_pic: 'link', 
        gender: 'N/A'
    }
];

describe('USER ROUTES', () => {

    describe('/users', () => {
        
        it('should respond with all users in db as a json packet with status 200', async () => {
            await db('users').insert(test_users);

            const res = await request(server).get('/api/users');

            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBe(2);
        });
    });

    describe('/users/:id', () => {
        
 
            it('should return the user that matches the id', async () => {
                await db('users').insert(test_users);
    
                const res = await request(server).get('/api/users/1');
    
                expect(res.status).toBe(200);
                expect(res.body.length).toBe(1);
                expect(res.body[0].first_name).toBe('Me');
            });
    
            it('should return status 400 and an error message if id absent or NaN', async () => {
                await db('users').insert(test_users);
    
                const res = await request(server).get('/api/users/NaN');
    
                expect(res.status).toBe(400);
                expect(res.body.message).toBe('No ID Found');
            });

            it('should return the updated user with status 200', async () => {
                await db('users').insert(test_users);

                const update = { first_name: 'Link' }

                const res = await request(server).put('/api/users/1')
                                                 .send(update);

                const users = await db('users');
                                           
                expect(res.body[0].first_name).toBe('Link');
                expect(res.body[0].id).toBe(1);
                expect(res.body[0].last_name).toBe('Me');
            });


            it('should return status 400 and an error message if id absent or NaN', async () => {
                await db('users').insert(test_users);
    
                const update = {
                    "email": "new@gmail.com",
                    "first_name": "Link",
                    "last_name": "...",
                    "password": "asDAsdasddas",
                    "phone": "166666666666"
                }

                const res = await request(server).put('/api/users/NaN')
                                                 .send(update);
    
                expect(res.status).toBe(400);
                expect(res.body.message).toBe('No ID Found');
            });
    
    });
});