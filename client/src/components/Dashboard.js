import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import NewBibleReadingForm from "./goals/NewBibleReadingForm.js";
import NewBibleMemoryForm from "./goals/NewBibleMemoryForm.js";
import NewBookReadingForm from "./goals/NewBookReadingForm.js";
import NewExerciseForm from "./goals/NewExerciseForm.js";
import RecentGoals from "./goals/recentGoalsIndex.js"

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchUserGoals();
	}

	renderWelcome() {
		const { auth } = this.props;
		return auth ? `Welcome back ${auth.name}` : `User dashboard`;
	}

	render() {
		return (
			<div>
				<div style={{ textAlign: "center" }}>
					<h3>{this.renderWelcome()}</h3>
					<strong>You currently have {this.props.points} points</strong>
				</div>

				<div style={{ marginTop: "10em" }}>
					<div className="newGoalForm">
            <h5 className="formTitle">New Memory Verse</h5>
						<NewBibleMemoryForm />
					</div>
					<div className="newGoalForm">
            <h5 className="formTitle">New Bible Reading</h5>
						<NewBibleReadingForm />
					</div>
					<div className="newGoalForm">
            <h5 className="formTitle">New Exercise</h5>
						<NewExerciseForm />
					</div>
					<div className="newGoalForm">
            <h5 className="formTitle">New Reading</h5>
						<NewBookReadingForm />
					</div>
				</div>

        <div>
          <RecentGoals />
        </div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth, goals: state.goals, points: state.points };
}

export default connect(mapStateToProps, actions)(Dashboard);
