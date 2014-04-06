var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var cleaningSchema = new mongoose.Schema({
	
	beds: int,
	baths: int,
	date: Date

});

module.exports = mongoose.model('Booze', cleaningSchema);