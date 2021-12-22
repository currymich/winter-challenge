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

  //generic get all goals route (caution - big)
  app.get("/api/goals", async (req, res) => {
    const allGoals = await Goal.find().sort({ $natural: -1 }).limit(2);

    res.send(allGoals);
  });
};
