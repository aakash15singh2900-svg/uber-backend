const mongoose = require('mongoose');

const { Schema } = mongoose;

const BlacklistSchema = new Schema({
	token: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		// TTL index: document will be removed 24 hours (86400 seconds) after createdAt
		expires: 86400,
	},
});

module.exports = mongoose.model('Blacklist', BlacklistSchema);


