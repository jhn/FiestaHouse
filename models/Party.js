var mongoose = require('mongoose');

var partySchema = new mongoose.Schema({
	
	email: String,

	title: String,
	address: String,
	date: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Party', partySchema);