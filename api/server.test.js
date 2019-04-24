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
        it('should return { api: "Up and Running" }', () => {
            const res = request(server).get('/');

            expect(res.body).toEqual({ api: 'Up and Running' });
        });
    });
});