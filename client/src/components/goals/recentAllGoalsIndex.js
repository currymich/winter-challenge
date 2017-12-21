import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import * as actions from '../../actions';

class RecentAllGoals extends Component {
  sortGoalsByDate() {
    let { goals } = this.props;
    goals = goals.sort(function(a,b){
      return new Date(b.date_created) - new Date(a.date_created);
    });

    return goals;
  }

  renderDate(date){
    return moment(date).format('ddd MMM DD [-] h:mm A');
  }

  typeToAction = goal => {
    const userName = goal.user_name.includes('(') ? goal.user_name.split('(')[0] : goal.user_name;

    switch (goal.type) {
        case "bibleReading":
          return `${userName} read ${goal.book} ${goal.chapter}`;
        case "bibleMemory":
          return `${userName} memorized ${goal.verse}`;
        case "bookReading":
          return `${userName} read ${goal.book}`;
        case "exercise":
          return `${userName} ran ${goal.distance} miles`;
        default:
      }
    };


  renderPosts() {
    let goals = this.sortGoalsByDate();

		return _.map(goals.slice(0, 5), goal => {
      return (
				<li className="list-item" key={goal._id}>
          <div>
            {this.renderDate(goal.date_created)}
          </div>
          <div>
            {this.typeToAction(goal)}
          </div>
        </li>
			);
		});
	}

	render() {
		return (
			<div>
				<h3>All Recently Completed Goals</h3>
				<ul className="list">{this.renderPosts()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { goals: state.goals };
}

export default connect(mapStateToProps, actions)(RecentAllGoals);
