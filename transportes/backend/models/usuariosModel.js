var pool = require('./bd');
var md5 = require('md5');


async function getUserByUsernameAndPassword(user, password) {
    try {
        //console.log('my password: ')
        //console.log('my password: '+ md5(password))
        // var query = 'SELECT * FROM usuarios WHERE usuario = ? LIMIT 1';
        var query = 'SELECT * FROM usuarios WHERE usuario = ?  LIMIT 1';
        var rows = await pool.query(query, [user ]);
        //var rows = await pool.query(query, [user, md5(password)]);
        // var [rows] = await pool.query(query, [user]);
       console.log(rows)

        return rows[0] ;
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = { getUserByUsernameAndPassword };
