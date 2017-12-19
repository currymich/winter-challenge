import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

class RecentGoals extends Component {
  sortGoalsByDate() {
    let { goals } = this.props;
    goals = goals.sort(function(a,b){
      return new Date(b.date_created) - new Date(a.date_created);
    });

    return goals;
  }

  renderDate(date){
    return new Date(date).toDateString().substr(0, 10);
  }

  typeToAction = goal => {
    switch (goal.type) {
        case "bibleReading":
          return `You read ${goal.book} ${goal.chapter}`;
        case "bibleMemory":
          return `You memorized ${goal.verse}`;
        case "bookReading":
          return `You read ${goal.book}`;
        case "exercise":
          return `You ran ${goal.distance} miles`;
        default:
      }
    };


  renderPosts() {
    let goals = this.sortGoalsByDate();

		return _.map(goals.slice(0, 5), goal => {
      return (
				<li className="list-item" key={goal._id}>
          {this.renderDate(goal.date_created)} - {this.typeToAction(goal)}
        </li>
			);
		});
	}

	render() {
		return (
			<div>
				<h3>Recently Completed Goals</h3>
				<ul className="list">{this.renderPosts()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { goals: state.goals };
}

export default connect(mapStateToProps)(RecentGoals);
