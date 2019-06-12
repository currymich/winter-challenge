const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
	user_id: String,
	user_name: String,
	date_created: {
		type: Date,
		default: Date.now
	}
}, { discriminatorKey: "type" });

const Goal = mongoose.model("goals", goalSchema);

const BibleReading = Goal.discriminator(
	"bibleReading",
	new Schema({
		points: { type: Number, default: 2 },
		book: String,
		chapter: String
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
		description: String,
		points: { type: Number, default: 1 }
	})
);

const BookReading = Goal.discriminator(
	"bookReading",
	new Schema({
		points: Number,
		book: String
	})
);
