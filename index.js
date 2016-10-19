var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/27017');

var PORT = 5000;
var app = express();

app.configure(function(){
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	require('./entities');
	require('./api')(app);
})

app.listen(PORT, function () {
    console.log('Express server listening on localhost:%d', PORT);
});