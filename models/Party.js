var mongoose = require('mongoose');

var partySchema = new mongoose.Schema({
	
	email: String,

	title: String,
	address: String,
	date: Date

});

module.exports = mongoose.model('Party', partySchema);