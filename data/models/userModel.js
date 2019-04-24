const db = require('../dbConfig');

const getAllUsers = async () => {
    return db('users');
}

const getUserBy = async (filter) => {
    return null;
}

const getUser = async () => {
    return null;
}

const addUser = async (user) => {
    const [ id ] = await db('users').insert(user);

    return await db('users').where({ id });
}

const editUser = async (id) => {
    return null;
}

const deleteUser = async (id) => {
    return null;
}

module.exports = {
    getAllUsers,
    getUserBy,
    getUser,
    addUser,
    editUser,
    deleteUser
}