const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'isabella',
  password : 'vladikisaac',
  database : 'my_db'
});

connection.connect();

module.exports  =  connection;