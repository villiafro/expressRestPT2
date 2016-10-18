var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/27017');

var modelsPath = path.join(__dirname, 'models');
fs.readdirSync(modelsPath).forEach(function (file) {
    if (/(.*)\.(js$)/.test(file)) {
        require(modelsPath + '/' + file);
    }
});

var PORT = 5000;
var app = express();

require('./api')(app);

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log('Express server listening on localhost:%d', PORT);
});