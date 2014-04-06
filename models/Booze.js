var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var boozeSchema = new mongoose.Schema({
	
	merchant_id: int,
	item_id: String,
	quantity: int

});

module.exports = mongoose.model('Booze', boozeSchema);