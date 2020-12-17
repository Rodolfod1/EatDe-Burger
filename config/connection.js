//Creating connections and exporting them 

var mysql = require("mysql");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  HOST: "us-cdbr-iron-east-02.cleardb.net",
  USER: "b7e2437887xxxa",
  PASSWORD: "0200xxx6",
  DB: "heroku_7643ec736354xxx"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// exporting connection 
module.exports=connection;