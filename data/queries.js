const pool = require('./pool')

async function getAllMessages(){
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(messageText, username, date) {
    await pool.query("INSERT INTO messages (messagetext, username, date) VALUES ($1, $2, $3)", [messageText, username, date]);
}

module.exports = {
    getAllMessages,
    insertMessage,
};