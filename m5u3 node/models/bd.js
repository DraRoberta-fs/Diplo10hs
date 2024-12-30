var mysql = require('mysql');
var util = require('util');

var pool = mysql.createPool({ 
connectionLimit: 10, 
host: 'localhost', 
user: 'root', 
password: 'root',
database: 'proyecto_utn', 
port: 8889


});

pool.query = util.promisify(pool.query);

module.exports = pool;
