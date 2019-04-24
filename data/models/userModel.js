const db = require('../dbConfig');

const getAllUsers = async () => {
    return db('users');
}

const getUserById = async (filter) => {
    return await db('users').where({ id: filter });
}

const addUser = async (user) => {
    const [ id ] = await db('users').insert(user);

    return await db('users').where({ id });
}

const editUser = async (id, edit) => {
    return null;
}

const deleteUser = async (id) => {
    const user = await db('users').where({ id })

    await db('users').where({ id }).del();

    return user;
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    editUser,
    deleteUser
}