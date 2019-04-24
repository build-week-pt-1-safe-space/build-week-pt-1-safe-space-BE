const db = require('../dbConfig');

const getAllMes = async () => {
    return await db('messages');
}

const getUserMes = async id => {
    return await db('messages').where({ user_id: id });
}

const addMes = async message => {
    const [ id ] = await db('messages').insert(message);
    
    return await db('messages').where({ id }); 
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