const mongoose = require("mongoose");
const { Schema } = mongoose;
const goalSchema = require("./Goal")


const userSchema = new Schema({
	googleId: String,
  name: String,
	points: { type: Number, default: 0 },
	goals: [{ type: Schema.Types.ObjectId, ref: 'Goal'}]
});

mongoose.model("users", userSchema);
