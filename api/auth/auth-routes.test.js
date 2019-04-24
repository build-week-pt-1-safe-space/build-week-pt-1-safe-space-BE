const request = require('supertest');
const server = require('../server');

const db = require('../../data/dbConfig');
const Users = require('../../data/models/userModel');

const user = {   
    email: 'asdasdme@gmail.com', 
    first_name: 'Me', 
    last_name: 'Me', 
    password: 'password', 
    phone: "15555555555", 
    profile_pic: 'link', 
    gender: 'M'
}

const user_err = {   
    email: 'asdasdme@gmail.com', 
    last_name: 'Me', 
    password: 'password', 
    phone: "15555555555", 
    profile_pic: 'link', 
    gender: 'M'
}

beforeEach(() => {
    return db('users').truncate();
});

describe('AUTH ROUTES', () => {
    
    describe('/register', () => {

        it('should return a JSON packet containing the new user with status 201', async () => {
            const res = await request(server).post('/api/register')
                                             .send(user);

            expect(res.status).toBe(201);
            expect(res.type).toBe('application/json');
            expect(res.body.user.first_name).toBe('Me')
        });

        it('should hash the user password', async () => {
            const res = await request(server).post('/api/register')
                                             .send(user);

            expect(res.body.user.password).not.toBe(user.password);
        });

        it('should return status 406 with error message if user object incorrect', async () => {
            const res = await request(server).post('/api/register')
                                             .send(user_err);

            expect(res.status).toBe(406);
        });

        it('should return status 409 if email address already present in DB', async () => {
            await request(server).post('/api/register')
                                 .send(user);

            const res = await request(server).post('/api/register')
                                             .send(user);

            expect(res.status).toBe(409);
        });
    });

    describe('/login', () => {
        
        it('should return status 200 on login', async () => {
            await request(server).post('/api/register')
                                 .send(user);
                                 
            const res = await request(server).post('/api/login')
                                            .send({ 
                                                email: user.email,
                                                password: user.password
                                            });

            expect(res.status).toBe(200);
        });
    });
});