// O.R.M. for SQL manipulation
//calling for connection .
var connection = require("./connection.js");
// **** HELPERS ****
// getting the standard helper functions for MYSQL Sysntax to create the ??
var Qmarks = (num) => {
    var MyAarr =[];
    for(i=0; i < num; i++){
        MyAarr.push("?");
    }
    return MyAarr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
var objToSql= (ob) => {
    var Myarr2 = [];
     // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        Myarr2.push(key + "=" + value);
      }
    }
    // translate the whole array to string 
    return Myarr2.toString();
  }
// Creating my ORM object with the three basic methods: Select, Insert , Update
var orm = {
    selectAll: (table,cb) => {
      var queryString = "SELECT * FROM ?? ";
      connection.query(queryString, [table], (err, result) => {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += Qmarks(vals.length);
        queryString += ") ";
      console.log(queryString);
      connection.query(queryString, vals, (err, result) => {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: (table, objColVals, condition, cb) => {
      var queryString ="UPDATE" + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
    console.log(queryString);
        connection.query(queryString,(err, result) => {
          if (err) throw err;
            cb(result);
        });
    }
  };
  
  module.exports = orm;
  