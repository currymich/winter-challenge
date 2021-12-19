const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
	user_id: String,
	user_name: String,
	date_created: {
		type: Date,
		default: Date.now
	},
	points: { type: Number, default: 1 },
	type: String,
	data: Object,
});

const Goal = mongoose.model("goals", goalSchema);