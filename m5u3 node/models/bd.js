var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({ 
connectionLimit: 10, 
host: 'localhost',
port: 8889,
user: 'root',
password: 'root',
database: 'proyecto_utn'


});

pool.query = util.promisify(pool.query);

module.exports = pool;
