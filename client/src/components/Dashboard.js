import React from "react";
import { useAuthState } from "../providers/Auth";
import { useGoalsState } from "../providers/Goals";
import styled from "styled-components";

import NewGoalForm from "./NewGoalForm";
import RecentUserGoals from "./goals/recentGoalsIndex.js";

const Container = styled.div`
  padding-bottom: 50px;
`;

const Dashboard = () => {
  const { authenticated, user } = useAuthState();
  const { userPoints } = useGoalsState();

  return (
    <div className="wc-dashboard--wrapper">
      <div className="wc-dashboard--header">
        <div>
          {authenticated ? (
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
          <RecentUserGoals />

          <NewGoalForm />
        </Container>
      )}
    </div>
  );
};

// function mapStateToProps(state) {
//   return { auth: state.auth, goals: state.goals, points: state.points };
// }

export default Dashboard;
