var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var users = new Schema({
    _id: {
	    type: Number,
	    index: true,
	    unique: true
  	},
    name: String,
    token: String,
    gender: String
});

var companies = new Schema({
    _id: {
	    type: Number,
	    index: true,
	    unique: true
  	},
    name: String,
    punchCount: { type: Number, default: 10 }
});

var punches = new Schema({
    _id: {
	    type: Number,
	    index: true,
	    unique: true
  	},
    company_id: Number,
  	user_id: Number,
  	created: { type: Date, default: Date.now },
  	used: { type: Boolean, default: false }
});

var user = mongoose.model('Users', users);
var company = mongoose.model('Companies', companies);
var punch = mongoose.model('Punches', punches);

var hagkaup = new company;
hagkaup._id = 0;
hagkaup.name = "Hagkaup";
hagkaup.punchCount = "10";
hagkaup.save();

var bonus = new company;
bonus._id = 1;
bonus.name = "Bónus";
bonus.punchCount = "10";
bonus.save();

var kronan = new company;
kronan._id = 2;
kronan.name = "Krónan";
kronan.punchCount = "10";
kronan.save();