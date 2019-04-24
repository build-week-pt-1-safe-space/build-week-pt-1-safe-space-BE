const db = require('../dbConfig');

const getAllMes = async () => {
    return await db('messages');
}

const getUserMes = async id => {
    return null;
}

const addMes = async message => {
    return null
}

const editMes = async (id, update) => {
    return null;
}

const deleteMes = async id => {
    return null;
}

module.exports = {
    getAllMes,
    getUserMes,
    addMes,
    editMes,
    deleteMes
}