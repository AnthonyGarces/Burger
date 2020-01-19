//Starting point for the node/express servers

//Dependencies
//==============================================================
var express = require("express");
const db = require('./models');

//Sets up express
//==============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//Sets up the Express App to handle data parsing
//==============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static directory to be served
//==============================================================
app.use(express.static("app/public"));

//Routes
//==============================================================

require("./app/routes/html-routes.js")(app)

//Starts the server to begin listening
//==============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log("app listening on PORT " + PORT);
    })
})