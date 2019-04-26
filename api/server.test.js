const request = require('supertest');
const server = require('./server');

const db = require('../data/dbConfig');

describe('SERVER', () => {
    describe('Environment', () => {
        it('should set the test environment', () => {
            const env = process.env.DB_CONNECT;

            expect(env).toBe('testing');
        });
    });

    describe('GET /', () => {
        it('should return the JSON object { api: "Up and Running" } with status 200', async () => {
            const res = await request(server).get('/');

            expect(res.body).toEqual({ api: 'Up and Running' });
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
        });
    });
});