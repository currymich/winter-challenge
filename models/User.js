const mongoose = require("mongoose");
const { Schema } = mongoose;
const goalSchema = require("./Goal");

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  salt: String,
  team: String,
});

mongoose.model("users", userSchema);
