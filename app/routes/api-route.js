// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require('../../models');

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api", function(req, res) {
      db.Burger.findAll().then(function(data) {
          
        res.json(data);
      });
    });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    //not reading the request value correctly
    var burger = JSON.stringify(req.body.burger).slice(1, -1);
    console.log(burger);
    // Then send it to the ORM to "save" into the DB.
    db.Burger.create(
        {
        burger_name: burger,
        devoured: 0
        })
        .then(function(data) {
        res.json(data);
        res.end();
    });

  });

  
};
