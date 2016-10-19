var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/27017');

var modelsPath = path.join(__dirname, 'models');
fs.readdirSync(modelsPath).forEach(function (file) {
    if (/(.*)\.(js$)/.test(file)) {
        require(modelsPath + '/' + file);
    }
});

var PORT = 5000;
var app = express();

app.configure(function(){
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	require('./api')(app);
})

app.listen(PORT, function () {
    console.log('Express server listening on localhost:%d', PORT);
});