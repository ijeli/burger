var mysql = require("mysql");

module.export = function() {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Jjb117jjB",
        database: "burgers_db"
    });
    connection.connect(function(err) {
        if (err) {
        console.error("error connecting: " + err.stack);
        return;
        }
        console.log("connected as id " + connection.threadId);
    });
}
