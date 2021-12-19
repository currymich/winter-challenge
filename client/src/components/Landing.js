import React, { Component } from "react";
import RecentAllGoals from "./goals/recentAllGoalsIndex.js";
import Scoreboard from "./Scoreboard";
import * as actions from "../actions";
import GoalInfo from "./GoalInfo";

const Landing = () => {
  // componentDidMount() {
  // 	this.props.fetchAllGoals();
  // }

  return (
    <div className="wc-landing--wrapper">
      <div className="wc-landing--heading">
        <h1>
          Koinonia
          <br />
          Winter
          <br />
          Challenge
        </h1>
      </div>
      <GoalInfo />
      {/* <div className="wc-dashboard--recent">
        <RecentAllGoals />
      </div> */}
      {/* <div>
        <Scoreboard />
      </div> */}
    </div>
  );
};

// function mapStateToProps(state){
//   return { goals: state.goals }
// }

export default Landing;
