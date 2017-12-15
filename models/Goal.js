const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
	user_id: String
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

const BibleMemory = Goal.discriminator(
	"bibleMemory",
	new Schema({
		points: { type: Number, default: 20 },
		verse: String
	})
);

const Exercise = Goal.discriminator(
	"exercise",
	new Schema({
		distance: Number,
		points: Number
	})
);

const BookReading = Goal.discriminator(
	"bookReading",
	new Schema({
		points: Number,
		book: String
	})
);
