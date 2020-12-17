//Creating connections and exporting them 

var mysql = require("mysql");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "N12rocks@01",
    database: "burger_db"
  });
};
  
// Initiate MySQL Connection.
connection.connect();
// exporting connection 
module.exports=connection;