var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var foodSchema = new mongoose.Schema({
	
	merchant_id: int,
	item_id: String,
	quantity: int

});

module.exports = mongoose.model('Food', foodSchema);