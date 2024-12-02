const mysql = require('mysql2');

const myConnection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'durgababu',
    database: 'users'
})

    
myConnection.connect(function(err) {
    if (err) throw err;
    myConnection.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
});