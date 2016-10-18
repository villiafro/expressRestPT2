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

mongoose.model('Users', users);
mongoose.model('Companies', companies);
mongoose.model('Punches', punches);