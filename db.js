const mysql = require('mysql2');

const myConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'durgababu',
  database: 'users',
});

module.exports = myConnection.promise();
