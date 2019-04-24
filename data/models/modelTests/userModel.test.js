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
    });

});