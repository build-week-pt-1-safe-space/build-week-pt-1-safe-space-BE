const Users = require('../userModel');
const db = require('../../dbConfig');

beforeEach(() => {
    return db('users').truncate();
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

    describe('addUser()', () => {

        it('should add user to database', async () => {
            await Users.addUser(test_users[0]);

            const users = await db('users');

            expect(users.length).toBe(1);
            expect(users[0].first_name).toBe('Me');
            expect(users[0].id).toBe(1);
        });

        it('should return the added user', async () => {
            const newUser = await Users.addUser(test_users[1]);

            expect(newUser[0]).toEqual({
                id: 1,  
                email: 'alsome@gmail.com', 
                first_name: 'Also', 
                last_name: 'Me', 
                password: 'asDASDasdas', 
                phone: "15555555555", 
                profile_pic: 'link', 
                gender: 'N/A'
            });
        });
    });
});