const mongoose = require("mongoose");
const Goal = mongoose.model("goals");
const User = mongoose.model("users");

module.exports = app => {
//Bible memorization routes
  app.post("/goals/bible_memory", async (req, res) => {
    const { user, verse } = req.body;
		const newMemorized = await Goal.create({
		  _user: user._id,
		  type: 'bibleMemory',
		  verse: verse
		});

    res.json({req: req.body, newGoal: newMemorized});
	});

	app.get("/goals/bible_memory", async (req, res) => {
		const memorized = await Goal.find({type: "bibleMemory"});

		res.send(memorized);
	});

//bible reading routes
  app.post("/goals/bible_reading", async (req, res) => {
    const { book, chapter } = req.body;
    const newReading = await Goal.create({
      _user: user._id,
      type: 'bibleReading',
      book,
      chapter
    });

    res.json({req: req.body, newGoal: newReading});
  });

  app.get("/goals/bible_reading", async (req, res) => {
    const read = await Goal.find({type: "bibleReading"});

    res.send(read);
  });

};
