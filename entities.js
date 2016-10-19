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

//fill db, should be commented out

var hagkaup = new company({
  _id : 0,
  name : "Hagkaup",
  punchCount : 10
});
hagkaup.save();

var bonus = new company({
  _id : 1,
  name : "Bónus",
  punchCount : 10
});
bonus.save();

var kronan = new company({
  _id : 2,
  name : "Krónan",
  punchCount : 10
});
kronan.save();

var villi = new user({
  _id : 0,
  name : "Vilhjalmur",
  token : "villi",
  gender : "m"
});
villi.save();

var haukur = new user({
  _id : 1,
  name : "Haukur",
  token : "haukur",
  gender : "m"
});
haukur.save();

var begga = new user({
  _id : 2,
  name : "Berglind",
  token : "begga",
  gender : "f"
});
begga.save();


