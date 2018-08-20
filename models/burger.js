var orm = require("../config/orm");


var newBurger 
var devoured 


var burger = {

    selectAll: function(cb) {
        orm.select("*", function (data) {
           cb(data)
        });
    },

    insertOne: function(name, cb){
        orm.insert(newBurger, function(data) {
            console.log("orm grabbed by id and inserted")
            cb(data)
        });
    },

    updateOne: function(name, cb) {
        orm.update(devoured, function(data) {
            console.log("orm grabbed by id and updated")
            cb(data)
        });
    }

}

module.exports = burger


