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
  const [userPoints, setUserPoints] = useState(0);

  const createGoal = async ({ user_id, name, type, points, ...data }) => {
    try {
      const newGoal = await axios.post("/api/goals", {
        user_id,
        name,
        type,
        points,
        data,
      });

      setUserGoals([...userGoals, newGoal.data]);
    } catch (error) {
      console.log("error creating goal", error);
    }
  };

  const deleteGoal = async (goalId) => {
    axios.delete(`/api/goals/${goalId}`);

    fetchUserGoals();
  };

  const fetchUserGoals = async () => {
    if (user) {
      const result = await axios.get(`/api/goals/user/${user._id}`);

      setUserGoals(result.data);
    } else {
      setUserGoals([]);
    }
  };

  useEffect(() => {
    fetchUserGoals();
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
    createGoal,
    deleteGoal,
  };

  return <GoalsStateContext.Provider value={value} children={children} />;
};

export const useGoalsState = () => {
  return useContext(GoalsStateContext);
};
