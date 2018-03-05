'use strict';

// Modules
var express = require('express');
var app = express();
var jsonParser = require('body-parser').json;

app.use(jsonParser());

// Create application server
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Express server is listening on port', port);
});