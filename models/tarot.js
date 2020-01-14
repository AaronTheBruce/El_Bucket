var mongoose = require("mongoose");

// Schema SetUp
var tarotSchema = new mongoose.Schema({
	number: Number,
	name: String,
	meaning: String,
	inversed: String,
	suit: String,
	isInverted: Boolean
});

// MODEL SETUP
module.exports = mongoose.model("Tarot", tarotSchema);