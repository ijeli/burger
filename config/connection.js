
var mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Jjb117jjB",
        database: "burgers_db",
    });
};

// Export connection for our ORM to use.
module.exports = connection;
