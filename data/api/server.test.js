const request = require('supertest');
const server = require('./server');

const db = require('../dbConfig');

describe('SERVER', () => {
    describe('Environment', () => {
        it('should set the test environment', () => {
            const env = process.env.DB_CONNECT;

            expect(env).toBe('testing');
        });
    });
});