const mongoose = require("mongoose");
const Goal = mongoose.model("goals");
const User = mongoose.model("users");
const _ = require("lodash");

module.exports = (app) => {
  app.post("/api/goals", async (req, res) => {
    const { type, points, data, user_id, name, team } = req.body;
    try {
      const newGoal = await Goal.create({
        user_id,
        user_name: name,
        type,
        points,
        team,
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
    const allGoals = await Goal.find().sort({ $natural: -1 }).limit(10);

    res.send(allGoals);
  });

  app.get("/api/scoreboard", async (req, res) => {
    const allGoals = await Goal.find();
    const allUsers = await User.find();

    const groupedGoals = _.groupBy(allGoals, "user_id");
    const keyedUsers = _.keyBy(allUsers, "_id");

    const teamPoints = {};
    Object.keys(groupedGoals).map((userId) => {
      const userGoals = groupedGoals[userId];
      const user = keyedUsers[userId];

      const points = userGoals.reduce(
        (sum, goal) => sum + parseInt(goal.points),
        0
      );

      const { team, name } = user;

      if (teamPoints[team]) {
        teamPoints[team] = {
          ...teamPoints[team],
          points: teamPoints[team].points + points,
          uniqUsers: [...teamPoints[team].uniqUsers, `${name}:${userId}`],
        };
      } else {
        teamPoints[team] = { team, points, uniqUsers: [`${name}:${userId}`] };
      }
    });

    res.send(Object.values(teamPoints));
  });

  app.get("/api/goals/all", async (req, res) => {
    const allGoals = await Goal.find(
      {},
      { data: 1, points: 1, user_name: 1, type: 1, _id: 0 }
    );
    const groupedGoals = _.groupBy(allGoals, "user_name");

    const users = Object.keys(groupedGoals).map((user_name) => {
      const userGoals = groupedGoals[user_name] || [];
      const points = userGoals.reduce(
        (sum, goal) => sum + parseInt(goal.points),
        0
      );

      return { user_name, points, userGoals };
    });

    res.send(users);
  });
};
