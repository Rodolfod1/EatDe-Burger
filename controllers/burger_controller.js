//setting up my controller 
var express = require("express");
var router = express.Router();
//importing model 
var burger = require("../models/burger.js");
// creating the routes 
//GET method
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        console.log("validating query and parsing:");
        console.log(data);
        var hbsObj = {
            burgers: data
        };
        console.log("this is it");
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});


//POST method
router.post("/api/burgers", (req,res) => {
    //Need to identify in front end script
    burger.insertOne('burger_name', [req.body.burger_name], result => {
        console.log('Updated');
        res.redirect("/");
    });
});

//UPDATE
router.put("/api/burgers/:id", (req,res) => {
     const condition = 'Id = ' + req.params.id;
   
    console.log("condition", condition);

    burger.updateOne({ devoured: true }, condition, (result) => {
            if (result.changedRows == 0){
                 // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;
