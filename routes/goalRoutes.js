const mongoose = require("mongoose");
const Goal = mongoose.model("goals");
const User = mongoose.model("users");

module.exports = app => {
//Bible memorization routes
  app.post("/goals/bible_memory", async (req, res) => {
    const { verse } = req.body;
    const { googleId, name } = req.user;
		const newMemorized = await Goal.create({
		  user_id: googleId,
      user_name: name,
		  type: 'bibleMemory',
		  verse: verse
		});

    res.json({req: req.body, newGoal: newMemorized});
	});

	app.get("/goals/bible_memory", async (req, res) => {

    if(!req.user){
      const memorized = await Goal.find({type: "bibleMemory"});
      res.send(memorized);
    } else {
      const memorized = await Goal.find({type: "bibleMemory", user_id: req.user.googleId});
      res.send(memorized);
    }

	});

//bible reading routes
  app.post("/goals/bible_reading", async (req, res) => {
    const { book, chapter , points} = req.body;
    const { googleId, name } = req.user;
    const newReading = await Goal.create({
      user_id: googleId,
      user_name: name,
      type: 'bibleReading',
      book,
      chapter,
      points
    });

    const userGoals = await Goal.find({user_id: req.user.googleId});
    res.send(userGoals);
  });

  app.get("/goals/bible_reading", async (req, res) => {
    if(!req.user){
      const read = await Goal.find({type: "bibleReading"});
      res.send(read);
    } else {
      const read = await Goal.find({type: "bibleReading", user_id: req.user.googleId});
      res.send(read);
    }
  });

//exercise routes
  app.post("/goals/exercise", async (req, res) => {
    const { distance, points } = req.body;
    const { googleId, name } = req.user;
    const newExercise = await Goal.create({
      user_id: googleId,
      user_name: name,
      type: 'exercise',
      distance,
      points
    });

    res.json({req: req.body, newGoal: newExercise});
  });

  app.get("/goals/exercise", async (req, res) => {

    if(!req.user){
      const exercise = await Goal.find({type: "exercise"});
      res.send(exercise);
    } else {
      const exercise = await Goal.find({type: "exercise", user_id: req.user.googleId});
      res.send(exercise);
    }

  });

//book reading routes
  app.post("/goals/book_reading", async (req, res) => {
    const { book, points } = req.body;
    const { googleId, name } = req.user;
    const newReading = await Goal.create({
      user_id: googleId,
      user_name: name,
      type: 'bookReading',
      book,
      points
    });

    res.json({req: req.body, newGoal: newReading});
  });

  app.get("/goals/book_reading", async (req, res) => {

    if(!req.user){
      const booksRead = await Goal.find({type: "bookReading"});
      res.send(booksRead);
    } else {
      const booksRead = await Goal.find({type: "bookReading", user_id: req.user.googleId});
      res.send(booksRead);
    }

  });

//get all goals for a user
  app.get("/goals/user", async (req, res) => {
    const userGoals = await Goal.find({user_id: req.user.googleId});

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
