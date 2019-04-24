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
    });
});