var connection = require("./connection.js");

var orm = {
    select: function(col, cb) {
        var queryString = "SELECT ?? FROM burgers";
        connection.query(queryString, [col], function(err, result) {
            if (err) throw err;
            console.log(result + "\nHere are all your burgers!");
            cb(err, result)
        });
    },
    insert: function(name, cb) {
        var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (??, false)";
        connection.query(queryString, [name], function(err, result) {
            if (err) throw err;
            console.log(name + " has been added to be devoured! :O");
            cb(err, result);
        });
    },
    update: function (name, cb) {
        var queryString = "UPDATE burgers SET devoured: true WHERE burger_name: ??";
        connnection.query(queryString, [name], function(err, result) {
            if (err) throw err;
            console.log(name + " was devoured! :P");
            cb(err, result);
        });
    }
}

module.exports = orm;