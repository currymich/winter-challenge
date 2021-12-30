import React, { useRef } from "react";
import { useAuthState } from "../providers/Auth";
import { useGoalsState } from "../providers/Goals";
import styled from "styled-components";
import { Button } from "antd";

import NewGoalForm from "./NewGoalForm";
import GoalsList from "./GoalsList.js";
import GoalInfo from "./GoalInfo";
import Scoreboard from "./Scoreboard";
import Padlet from "./Padlet";

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  margin: 50px auto;
`;

const Container = styled.div`
  padding: 0 50px 50px 50px;
`;

const scrollToRef = (ref) => {
  ref.current.scrollIntoView();
};

const Dashboard = () => {
  const allGoalsRef = useRef(null);
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
          <ButtonContainer>
            <Button onClick={() => scrollToRef(allGoalsRef)} size='large'>
              View goals from others!
            </Button>
          </ButtonContainer>

          <Scoreboard />

          <GoalsList
            title={"Your Recently Completed Goals"}
            self
            goals={userGoals}
            deleteGoal={deleteGoal}
          />

          <NewGoalForm />

          <GoalInfo />

          <div
            style={{ borderTop: "1px solid #ddd", paddingTop: "50px" }}
            ref={allGoalsRef}
          >
            <GoalsList
              style={{ marginTop: "0px" }}
              title={"All Recently Completed Goals"}
              goals={recentGoals}
            />
            <Padlet />
          </div>
        </Container>
      )}
    </div>
  );
};

export default Dashboard;
