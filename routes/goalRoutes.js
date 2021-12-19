const mongoose = require("mongoose");
const Goal = mongoose.model("goals");
const User = mongoose.model("users");

module.exports = (app) => {
  app.post("/api/goals", async (req, res) => {
    const { type, points, data, user_id, name } = req.body;
    try {
      const newGoal = await Goal.create({
        user_id,
        user_name: name,
        type,
        points,
        data,
      });

      res.send(newGoal);
    } catch (error) {
      console.log("err", error);
    }
  });

  //get all goals for a user
  app.get("/api/goals/user/:userId", async (req, res) => {
    let userGoals = [];

    userGoals = await Goal.find({ user_id: req.params.userId });

    res.send(userGoals);
  });

  //generic delete route
  app.delete("/api/goals/:_id", async (req, res) => {
    const { _id } = req.params;
    const goal = await Goal.findByIdAndRemove({ _id });

    res.send(goal._id);
  });

  //Bible memorization routes
  app.post("/api/goals/bible_memory", async (req, res) => {
    const { verse } = req.body;
    const { googleId, name } = req.user;
    const newMemorized = await Goal.create({
      user_id: googleId,
      user_name: name,
      type: "bibleMemory",
      verse: verse,
    });

    const userGoals = await Goal.find({ user_id: req.user.googleId });
    res.send(userGoals);
  });

  app.get("/api/goals/bible_memory", async (req, res) => {
    if (!req.user) {
      const memorized = await Goal.find({ type: "bibleMemory" });
      res.send(memorized);
    } else {
      const memorized = await Goal.find({
        type: "bibleMemory",
        user_id: req.user.googleId,
      });
      res.send(memorized);
    }
  });

  //bible reading routes
  app.post("/api/goals/bible_reading", async (req, res) => {
    const { book, chapter, points } = req.body;
    const { googleId, name } = req.user;
    const newReading = await Goal.create({
      user_id: googleId,
      user_name: name,
      type: "bibleReading",
      book,
      chapter,
      points,
    });

    const userGoals = await Goal.find({ user_id: req.user.googleId });
    res.send(userGoals);
  });

  app.get("/api/goals/bible_reading", async (req, res) => {
    if (!req.user) {
      const read = await Goal.find({ type: "bibleReading" });
      res.send(read);
    } else {
      const read = await Goal.find({
        type: "bibleReading",
        user_id: req.user.googleId,
      });
      res.send(read);
    }
  });

  //exercise routes
  app.post("/api/goals/exercise", async (req, res) => {
    const { description } = req.body;
    const { googleId, name } = req.user;
    const newExercise = await Goal.create({
      user_id: googleId,
      user_name: name,
      type: "exercise",
      description,
    });

    const userGoals = await Goal.find({ user_id: req.user.googleId });
    res.send(userGoals);
  });

  app.get("/api/goals/exercise", async (req, res) => {
    if (!req.user) {
      const exercise = await Goal.find({ type: "exercise" });
      res.send(exercise);
    } else {
      const exercise = await Goal.find({
        type: "exercise",
        user_id: req.user.googleId,
      });
      res.send(exercise);
    }
  });

  //book reading routes
  app.post("/api/goals/book_reading", async (req, res) => {
    const { book, points } = req.body;
    const { googleId, name } = req.user;
    const newReading = await Goal.create({
      user_id: googleId,
      user_name: name,
      type: "bookReading",
      book,
      points,
    });

    const userGoals = await Goal.find({ user_id: req.user.googleId });
    res.send(userGoals);
  });

  app.get("/api/goals/book_reading", async (req, res) => {
    if (!req.user) {
      const booksRead = await Goal.find({ type: "bookReading" });
      res.send(booksRead);
    } else {
      const booksRead = await Goal.find({
        type: "bookReading",
        user_id: req.user.googleId,
      });
      res.send(booksRead);
    }
  });

  //generic get all goals route (caution - big)
  app.get("/api/goals", async (req, res) => {
    const allGoals = await Goal.find();

    res.send(allGoals);
  });
};
