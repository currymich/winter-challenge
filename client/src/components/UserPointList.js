import React from "react";
import _ from "lodash";

const Scoreboard = () => {
  // componentDidMount() {
  // 	this.props.fetchAllGoals();
  // 	this.props.fetchAllUsers();
  // }

  const calcPoints = (user_id) => {
    let allGoals = this.props.goals;

    // filters all goals to get just user's goals
    let goals = allGoals.filter((goal) => user_id === goal.user_id);

    const points = actions.calculateUserPoints(goals);

    return points;
  };

  const pointsArray = () => {
    let allUsers = this.props.users;

    let pointArray = [];

    allUsers.forEach((user) => {
      pointArray.push({
        label: user.name,
        points: this.calcPoints(user.googleId),
      });
    });

    return pointArray;
  };

  const renderChart = (data) => {
    return _.map(data, (datum) => {
      return (
        <div key={datum.label} className="bar" style={{ width: "100%" }}>
          {`${datum.label} (${datum.points})`}
        </div>
      );
    });
  };

  return (
    <div className="charts">
      <div className="chart">
        <h5 className="chart-title">Score by person</h5>
        {this.renderChart(this.pointsArray())}
      </div>
    </div>
  );
};

// function mapStateToProps(state) {
// 	return { users: state.users, goals: state.goals };
// }

export default Scoreboard;
