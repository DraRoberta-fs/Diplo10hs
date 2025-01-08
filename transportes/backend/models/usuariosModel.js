const md5 = require('md5');
var pool = require('./bd');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ? LIMIT 1';
        var [rows] = await pool.query(query, [user, md5(password)]);
        return rows.length ? rows[0] : null;
    } catch (error) {
        console.log(error);
        throw error; // To propagate the error up the call stack
    }
}

module.exports = { getUserByUsernameAndPassword };
