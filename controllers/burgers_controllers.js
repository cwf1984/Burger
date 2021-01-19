var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {

    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

});

router.post("/api/burger", function(req, res) {

    burger.insertOne({
        burger_name: req.body.burger_name
    }).then(function(result) {
        res.json({ id: result.addBurger})
    });
});

router.put("/api/burger/:id", function(req, res) {

    burger.updateOne({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }, {
        where: req.params.id
    }).then(function(result) {
        res.json(result)
    });

});

// router.delete("api/burger/:id", function(req, res) {

//     burger.destroy({
//         where: {
//             id = req.params.id
//         }
//     }).then(function(result) {
//         res.json(result)
//     });

// });

module.exports = router;
