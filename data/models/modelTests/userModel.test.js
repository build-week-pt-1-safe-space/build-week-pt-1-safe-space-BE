const Users = require('../userModel');
const db = require('../../dbConfig');

beforeEach(() => {
    return db('users').truncate();
});

describe('Users Model', () => {

    describe('getAllUsers()', () => {
        it('should return an array', async () => {
            const users = await Users.getAllUsers();
     
            expect(Array.isArray(users)).toBe(true);
        });

        it('should return an empty array if no users found', async () => {
            const users = await Users.getAllUsers();

            expect(users).toEqual([]);
            expect(users.length).toBe(0);
        });
    });
});