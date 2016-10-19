var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var user = mongoose.model('Users'),
    company = mongoose.model('Companies'),
    punch = mongoose.model('Punches');

var app = express();

/*var companies = [
  { name : 'Hagkaup', punchCount : 10},
  { name : 'Bónus', punchCount : 10},
  { name : 'Krónan', punchCount : 10}
];

var users = [
  { name : 'Vilhjalmur', email : "vilhjalmur@gmail.com"},
  { name : 'Haukur', email : "haukur@gmail.com"},
  { name : 'Begga', email : "begga@gmail.com"}
];

var punches = [
  { userID : 0, companyID : 2, date : "2013-10-01T01:46:35.591Z"},
  { userID : 1, companyID : 1, date : "2016-12-31T16:13:35.591Z"},
  { userID : 2, companyID : 0, date : "2004-02-12T14:59:35.591Z"},
  { userID : 0, companyID : 1, date : "2013-10-01T01:46:35.591Z"},
  { userID : 1, companyID : 0, date : "2016-12-31T16:13:35.591Z"},
  { userID : 2, companyID : 2, date : "2004-02-12T14:59:35.591Z"}
];*/

//app.use(express.bodyParser());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//var todos = require('./controllers/controller');

module.exports = function(app) {

  app.get('/api/companies', function(req, res) {
    company.find().exec(function (err, todo) {
        if (err) return res.json(500, err);
        res.json(todo);
    });
  });

  app.post('/api/companies', function(req, res) {
    var newComp = new company(req.body);
    //console.log(newComp);
    newComp.save(function (err) {
        console.log(err);
        if (err) return res.json(500, err);
        res.json(newComp);
    });
    /*var newCompany = {
      name : req.body.name,
      punchCount : req.body.punchCount
    };

    companies.push(newCompany);
    res.json(true);*/
  });

};

/*app.get('/api/companies', function(req, res) {
  
  res.json(companies);
});

app.post('/api/companies', function(req, res) {
  if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('punchCount')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newCompany = {
    name : req.body.name,
    punchCount : req.body.punchCount
  };

  companies.push(newCompany);
  res.json(true);
});

app.get('/api/companies/:id', function(req, res) {
  if(companies.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }
  var c = companies[req.params.id];
  res.json(c);
});

app.get('/api/users', function(req, res) {
  res.json(users);
});

app.post('/api/users', function(req, res) {
  if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('email')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newUser = {
    name : req.body.name,
    email : req.body.email
  };

  users.push(newUser);
  res.json(true);
});

app.get('/api/users/:id/punches:company?', function(req, res) {
  if(users.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send('Error 404: No quote found');
  }

  var p = [];

  	if(req.query.company){
	  	for(var i = 0; i < punches.length; i++){
		  	if(punches[i].userID == req.params.id && punches[i].companyID == req.query.company){
		  		p.push({
		  			"Company" : companies[punches[i].companyID].name,
		  			"Date" : punches[i].date
		  		});
			}
		}
	}
 
  	else{
	  	for(var i = 0; i < punches.length; i++){
		  	if(punches[i].userID == req.params.id){
		  		p.push({
		  			"Company" : companies[punches[i].companyID].name,
		  			"Date" : punches[i].date
		  		});
			}
		}
  	}

  res.json(p);
});

app.post('/api/users/:id/punches', function(req, res) {
  if(!req.body.hasOwnProperty('companyID')) {
    res.statusCode = 400;
    return res.send('Error 400: Post syntax incorrect.');
  }

  var newPunch = {
    userID : req.params.id,
    companyID : req.body.companyID,
    date : new Date()
  };

  punches.push(newPunch);
  res.json(true);
});

app.listen(process.env.PORT || 5000);*/