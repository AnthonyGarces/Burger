//Starting point for the node/express servers

//Dependencies
//==============================================================
var express = require("express");
const db = require('./models');
var mysql = require('mysql');
var connection;

//Sets up express
//==============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//Sets up the Express App to handle data parsing
//==============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'database_development'
    });
};

//Static directory to be served
//==============================================================
app.use(express.static("app/public"));

//Routes
//==============================================================
require("./app/routes/api-route.js")(app);

require("./app/routes/html-route.js")(app);

//Starts the server to begin listening
//==============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log("app listening on PORT " + PORT);
    })
})