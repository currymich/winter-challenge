const mongoose = require("mongoose");
const Goal = mongoose.model("goals");
const User = mongoose.model("users");

module.exports = app => {
//Bible memorization routes
  app.post("/goals/bible_memory", async (req, res) => {
    const { user, verse } = req.body;
		const newMemorized = await Goal.create({
		  user_id: user.googleId,
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
    const { user, book, chapter } = req.body;
    const newReading = await Goal.create({
      user_id: user.googleId,
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

//exercise routes
  app.post("/goals/exercise", async (req, res) => {
    const { user, distance, points } = req.body;
    const newExercise = await Goal.create({
      user_id: user.googleId,
      type: 'exercise',
      distance,
      points
    });

    res.json({req: req.body, newGoal: newExercise});
  });

  app.get("/goals/exercise", async (req, res) => {
    const exercise = await Goal.find({type: "exercise"});

    res.send(exercise);
  });

//book reading routes
  app.post("/goals/book_reading", async (req, res) => {
    const { user, book, points } = req.body;
    const newReading = await Goal.create({
      user_id: user.googleId,
      type: 'bookReading',
      book,
      points
    });

    res.json({req: req.body, newGoal: newReading});
  });

  app.get("/goals/book_reading", async (req, res) => {
    const booksRead = await Goal.find({type: "bookReading"});

    res.send(booksRead);
  });

//get all goals for a user
  app.get("/goals/user/:id", async (req, res) => {
    const userGoals = await Goal.find({user_id: req.params.id});

    res.send(userGoals);
  });


//generic get all goals route (caution - big)
  app.get("/goals", async (req, res) => {
    const allGoals = await Goal.find();

    res.send(allGoals);
  });

//generic delete route
  app.delete("/goals", async (req, res) => {
    const goal = await Goal.findByIdAndRemove({_id: req.body.goalId});

    res.json({goal: goal})
  });
};
