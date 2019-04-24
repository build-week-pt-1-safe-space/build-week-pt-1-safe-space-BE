const db = require('../dbConfig');

//Return All Users in DataBase
const getAllUsers = async () => {
    return db('users');
}

//Return Single User In Database By ID
const getUserById = async (filter) => {
    return await db('users').where({ id: filter });
}

//Return User That Was Stored In Database
const addUser = async (user) => {
    const [ id ] = await db('users').insert(user);

    return await db('users').where({ id });
}

//Return Updated User From Database
const editUser = async (id, edit) => {
    await db('users').where({ id }).update(edit);

    return await db('users').where({ id });
}

//Return User That Was Removed From Database
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