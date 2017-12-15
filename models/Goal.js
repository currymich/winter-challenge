const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
	_user: { type: Schema.Types.ObjectId, ref: 'User'}
}, { discriminatorKey: "type" });

const Goal = mongoose.model("goals", goalSchema);

