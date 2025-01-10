var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({ 
    connectionLimit: 10, 
    // host: 'localhost', 
    host: process.env.MYSQL_HOST,
    // user: 'root', 
    user: process.env.MYSQL_USER,
    // password: 'root',
    password: process.env.MYSQL_PASSWORD,
    // database: 'transportesdiplo', 
    database: process.env.MYSQL_DB_NAME,

   port: 8889

});
pool.query = util.promisify(pool.query);
module.exports = pool;