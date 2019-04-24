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

describe('USERS MODEL', () => {

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

        it('should return all users found in database', async () => {
            await db('users').insert(test_users);

            const users = await Users.getAllUsers();

            expect(users.length).toBe(2);
            expect(users[0].id).toBe(1);
            expect(users[1].id).toBe(2);
            expect(users[0].gender).toBe('M');
            expect(users[1].gender).toBe('N/A');
        });
    });

    describe('getUserById()', () => {

        it('should return a single user', async () => {
            await db('users').insert(test_users);

            const user = await Users.getUserById(1);

            expect(user.length).toBe(1);
        });

        it('should return user filtered by ID', async () => {
            await db('users').insert(test_users);

            const user = await Users.getUserById(2);

            expect(user[0].first_name).toBe('Also');
            expect(user[0].gender).toBe('N/A');
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

    describe('editUser()', () => {
        
        it('should return the user', async () => {
            await db('users').insert(test_users);

            const edit = { first_name: 'New' }

            const user = await Users.editUser(1, edit);
            console.log(user)
            expect(user[0].id).toBe(1);
        });
    });

    describe('deleteUser()', () => {

        it('should remove user from the database by id', async () => {
            await db('users').insert(test_users);
            await Users.deleteUser(1);

            const users = await db('users');

            expect(users.length).toBe(1);
            expect(users[0].id).toBe(2);
        });

        it('should return the user that was removed', async () => {
            await db('users').insert(test_users);

            const user = await Users.deleteUser(1);

            expect(user[0].id).toBe(1);
            expect(user[0].first_name).toBe('Me');
            expect(user[0].gender).toBe('M');
        });
    });
});