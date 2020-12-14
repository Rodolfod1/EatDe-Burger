// O.R.M. for SQL manipulation
//calling for connection .
var connection = require("./connection.js");

// Creating my ORM object with the three basic methods: Select, Insert , Update
var orm = {
    selectAll: function(table) {
      var queryString = "SELECT * FROM ?? ";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(table, WhatToInsert) {
      var queryString = "INSERT INTO ?? SET ??";
      console.log(queryString);
      connection.query(queryString, [table, WhatToInsert], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(table, WhatToUpdate, tableKey) {
      var queryString ="UPDATE ?? SET ??  WHERE ?? ";
        connection.query(queryString, [table, WhatToUpdate, tableKey],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
  