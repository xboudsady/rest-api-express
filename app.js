'use strict';

// Modules
var express = require('express');
var app = express();
var jsonparser = require('body-barser');


// Middleware
app.use(function(req, res, next) {
    console.log("First piece of middleware");
    next();
});

app.use("/different/:id", function (req, res, next) {
    console.log("Second piece of middleware, ID:", req.params.id);
    next();
});


// Create application server
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Express server is listening on port', port);
});