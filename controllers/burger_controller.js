//setting up my controller 
var express = require("express");
var router = express.Router();
//importing model 
var burger = require("../models/burger.js");
// creating the routes 
//GET method
router.get("/", (req, res) => {
    burger.select((data) => {
        var hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);
    });
});


//POST method
router.post("/api/burgers", (req,res) => {
    //Need to identify in front end script
    burger.insert('burgerName', [req.body.burgerName], result => {
        console.log('Updated');
        res.redirect("/");
    });
});

//UPDATE
router.put("/api/burgers/:id", (req,res) => {
    const condition = 'id = ' + req.params.id;t
    console.log("condition", condition);

    burger.update({ devoured: true }, condition, (result) => {
            if (result.changedRows == 0){
                 // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;
