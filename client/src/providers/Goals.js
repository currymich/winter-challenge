import React, { useContext, useState, useEffect } from "react";
import { useAuthState } from "../providers/Auth";
import axios from "axios";

const GoalsStateContext = React.createContext();

const initialState = {
  authenticated: false,
  user: null,
};

export const GoalsStateProvider = ({ children }) => {
  const { authenticated, user } = useAuthState();
  const [userGoals, setUserGoals] = useState([]);
  const [recentGoals, setRecentGoals] = useState([]);
  const [scoreboard, setScoreboard] = useState([]);
  const [userPoints, setUserPoints] = useState(0);

  const createGoal = async ({ user_id, name, type, points, team, ...data }) => {
    try {
      const newGoal = await axios.post("/api/goals", {
        user_id,
        name,
        type,
        points,
        team,
        data,
      });

      setUserGoals([...userGoals, newGoal.data]);
      setRecentGoals([...recentGoals, newGoal.data]);

      const newScoreboard = [...scoreboard].map((t) => {
        if (t.team === team) {
          return { team, points: parseInt(t.points) + points };
        }
        return t;
      });
      setScoreboard(newScoreboard);
    } catch (error) {
      console.log("error creating goal", error);
    }
  };

  const deleteGoal = async (goalId) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      axios.delete(`/api/goals/${goalId}`);
    }

    fetchUserGoals();
    fetchRecentGoals();
    fetchScoreboard();
  };

  const fetchUserGoals = async () => {
    if (user) {
      const result = await axios.get(`/api/goals/user/${user._id}`);

      setUserGoals(result.data);
    } else {
      setUserGoals([]);
    }
  };

  const fetchRecentGoals = async () => {
    const result = await axios.get(`/api/goals`);

    setRecentGoals(result.data);
  };

  const fetchScoreboard = async () => {
    const result = await axios.get(`/api/scoreboard`);

    setScoreboard(result.data);
  };

  const fetchAllGoals = async (pass) => {
    if (pass === "51234") {
      const result = await axios.get(`/api/goals/all`);

      return { data: result.data, error: null };
    } else {
      return { error: "wrong pass", data: null };
    }
  };

  useEffect(() => {
    fetchUserGoals();
    fetchRecentGoals();
    fetchScoreboard();
  }, [user]);

  useEffect(() => {
    const points = userGoals.reduce(
      (sum, goal) => sum + parseInt(goal.points),
      0
    );
    setUserPoints(points);
  }, [userGoals]);

  const value = {
    userGoals,
    userPoints,
    recentGoals,
    scoreboard,
    createGoal,
    deleteGoal,
    fetchAllGoals,
  };

  return <GoalsStateContext.Provider value={value} children={children} />;
};

export const useGoalsState = () => {
  return useContext(GoalsStateContext);
};
