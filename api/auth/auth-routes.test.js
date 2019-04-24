const request = require('supertest');
const server = require('../server');

const db = require('../../data/dbConfig');
const Users = require('../../data/models/userModel');

const user = {   
    email: 'me@gmail.com', 
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
            const res = await request(server).get('/api/register');

            expect(res.status).toBe(201);
        });
    });
});