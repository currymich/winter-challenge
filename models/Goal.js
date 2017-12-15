const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
	_user: { type: Schema.Types.ObjectId, ref: 'User'}
}, { discriminatorKey: "type" });

const Goal = mongoose.model("goals", goalSchema);

const BibleReading = Goal.discriminator(
	"bibleReading",
	new Schema({
		points: { type: Number, default: 2 },
		book: String,
		chapter: Number
	})
);

