var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var partySchema = new mongoose.Schema({
	
	email: String,

	title: String,
	address: String,
	date: { type: Date, default: Date.now },

	food: ObjectId,
	booze: ObjectId,
	cleaning: ObjectId

});

module.exports = mongoose.model('Party', partySchema);