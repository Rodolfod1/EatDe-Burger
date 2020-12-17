// importing my ORM 
var orm = require("../config/orm.js");
//creating the model burger
var burger = {
    //first for selecting all 
    selectAll: (cb)=>{
        orm.selectAll("Burgers", (res)=> {
            /// we send the call back from what we read from MYSQL
           cb(res);
    });
    }, 
    // inserting a new burger name
    insertOne: (cols, vals, cb) => {
        orm.insertOne("Burgers", cols, vals, (res) =>{
            cb(res);
        });
    },
    // Update devoured status based on the burger_name.
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("Burgers", objColVals, condition,(res)=>{
            cb(res);
        });
    }
};
module.exports = burger;