import React from "react";
import { useAuthState } from "../providers/Auth";
import { useGoalsState } from "../providers/Goals";
import styled from "styled-components";

import NewGoalForm from "./NewGoalForm";
import GoalsList from "./GoalsList.js";
import GoalInfo from "./GoalInfo";
import Scoreboard from "./Scoreboard";

const Container = styled.div`
  padding-bottom: 50px;
`;

const Dashboard = () => {
  const { authenticated, user } = useAuthState();
  const { userPoints, userGoals, recentGoals, deleteGoal } = useGoalsState();

  return (
    <div className="wc-dashboard--wrapper">
      <div className="wc-dashboard--header">
        <div>
          {authenticated && user ? (
            <p>
              Welcome back <br />
              <span className="wc-dashboard--user">{user.name}</span>
            </p>
          ) : (
            <p>
              User dashboard <br /> Sign in to see your scores
            </p>
          )}
          <strong>
            You currently have
            <br />
            <span className="wc-dashboard--points">{userPoints}</span> points
          </strong>
        </div>
      </div>

      {authenticated && (
        <Container>
          <Scoreboard />

          <GoalsList
            title={"All Recently Completed Goals"}
            goals={recentGoals}
          />

          <GoalsList
            title={"Your Recently Completed Goals"}
            self
            goals={userGoals}
            deleteGoal={deleteGoal}
          />

          <NewGoalForm />

          <GoalInfo />
        </Container>
      )}
    </div>
  );
};

export default Dashboard;
