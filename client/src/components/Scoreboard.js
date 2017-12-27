import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";

class Scoreboard extends Component {
	componentDidMount() {
		this.props.fetchAllGoals();
		this.props.fetchAllUsers();
	}

	genderUsers(gender) {
		let allUsers = this.props.users;

		//returns array with googleId's of each
		let users = allUsers.filter(user => user.gender === gender).map(user => {
			return user.googleId;
		});

		return users;
	}

	classUsers(grade) {
		let allUsers = this.props.users;

		//returns array with googleId's of each
		let users = allUsers.filter(user => user.class === grade).map(user => {
			return user.googleId;
		});

		return users;
	}

	calcPoints(users) {
		let allGoals = this.props.goals;

		// filters all goals to get just sis goals
		let goals = allGoals.filter(goal => users.includes(goal.user_id));

		const points = actions.calculateUserPoints(goals)

		return points;
	}

	calcClassPoints() {
		let freshmen = this.classUsers("freshmen");
		let sophomores = this.classUsers("sophomore");
		let juniors = this.classUsers("junior");
		let seniors = this.classUsers("senior");
		let staff = this.classUsers("staff");

		const froshPoints = this.calcPoints(freshmen);
		const sophPoints = this.calcPoints(sophomores);
		const juniorPoints = this.calcPoints(juniors);
		const seniorPoints = this.calcPoints(seniors);
		const staffPoints = this.calcPoints(staff);

		var data = [
			{ label: "Freshmen", points: froshPoints },
			{ label: "Sophomores", points: sophPoints },
			{ label: "Juniors", points: juniorPoints },
			{ label: "Seniors", points: seniorPoints },
			{ label: "Staff", points: staffPoints }
		];

		return data;
	}

	renderChart(data) {
		let points = data.map(d => {
			return d.points;
		});

		var max = points.reduce((a, b) => {
			return Math.max(a, b);
		});

		data.forEach(datum => {
			datum.width = 100 * (datum.points / max);
		});

		return _.map(data, datum => {
			return (
				<div
					key={datum.label}
					className="bar"
					style={{ width: datum.width + "%" }}
				>
					{`${datum.label} (${datum.points})`}
				</div>
			);
		});
	}

	calcGenderPoints() {
		let sisters = this.genderUsers("female");
		let bros = this.genderUsers("male");

		const sisPoints = this.calcPoints(sisters);
		const broPoints = this.calcPoints(bros);

		return [
			{ label: "Bros", points: broPoints },
			{ label: "Sisters", points: sisPoints }
		];
	}

	render() {
		return (
			<div className="charts">
				<div className="chart">
					<h5 className="chart-title">Score by class</h5>
					{this.renderChart(this.calcClassPoints())}
				</div>
				<div className="chart">
					<h5 className="chart-title">Bros vs Sisters</h5>
					{this.renderChart(this.calcGenderPoints())}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users, goals: state.goals };
}

export default connect(mapStateToProps, actions)(Scoreboard);
