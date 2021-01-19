var orm = require ("../config/orm");


// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {

    selectAll: function(cb) {

        orm.selectAll("burger", function(res) {

            cb(res);

        });
    },

    insertOne: function(cols, vals, cb) {

        orm.insertOne("burger", cols, vals, function(res) {

            cb(res);

        });
    },

    updateOne: function(objVals, condition, cb) {

        orm.updateOne("burger", objVals, condition, function(res) {

            cb(res);

        });
    }
    
};

module.exports = burger;