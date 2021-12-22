import React, { Component } from "react";
import GoalInfo from "./GoalInfo";

const Landing = () => {
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
    </div>
  );
};

export default Landing;
