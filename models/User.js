const mongoose = require("mongoose");
const { Schema } = mongoose;
const goalSchema = require("./Goal")


const userSchema = new Schema({
	googleId: String,
  name: String,
	points: { type: Number, default: 0 },
	goals: [{ type: Schema.Types.ObjectId, ref: 'Goal'}],
	gender: { type: String, default: "" },
	class: { type: String, default: "" }
});

mongoose.model("users", userSchema);
