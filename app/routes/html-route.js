//Set up the various routes I need (if i needed more routes)

//Dependencies

var path = require("path");

module.exports = function(app) {

    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
};