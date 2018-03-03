'use strict';

// Modules
var express = require('express');


// Use Express
var app = express();

// Middleware
app.use(function(req, res, next) {
    console.log("First piece of middleware");
    next();
});

app.use("/different", function (req, res, next) {
    console.log("Second piece of middleware");
    next();
});


// Create application server
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Express server is listening on port', port);
});