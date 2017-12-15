const mongoose = require("mongoose");
const Goal = mongoose.model("goals");
const User = mongoose.model("users");

module.exports = app => {
	app.get("/goals/bible_memory", async (req, res) => {
		const memorized = await Goal.find({type: "bibleMemory"});

		res.send(memorized);
	});

  app.get("/goals/bible_reading", async (req, res) => {
    const read = await Goal.find({type: "bibleReading"});

    res.send(read);
  });

};
