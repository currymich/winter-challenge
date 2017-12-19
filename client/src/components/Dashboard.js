import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import NewBibleReadingForm from "./goals/NewBibleReadingForm.js";
import NewBibleMemoryForm from "./goals/NewBibleMemoryForm.js";
import NewBookReadingForm from "./goals/NewBookReadingForm.js";
import NewExerciseForm from "./goals/NewExerciseForm.js";

class Dashboard extends Component {
	componentDidMount() {
		this.props.fetchBibleReading();
	}

	renderWelcome() {
		const { auth } = this.props;
		return auth ? `Welcome back ${auth.name}` : `User dashboard`;
	}

	render() {
		return (
			<div className='wc-dashboard--wrapper'>
				<div className='wc-dashboard--header'>
					<h3>{this.renderWelcome()}</h3>
					<strong>You currently have<br/><span className='wc-dashboard--points'>{this.props.points}</span> points</strong>
				</div>

				<div className='wc-dashboard--body row'>
          <div className="col-xs-12 col-sm-6 col-md-3 newGoalForm wc-dashboard--verses">  
            <h5 className="formTitle">New Memory Verse</h5>
						<NewBibleMemoryForm />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 newGoalForm wc-dashboard--bible">
            <h5 className="formTitle">New Bible Reading</h5>
						<NewBibleReadingForm />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 newGoalForm wc-dashboard--exercise">
            <h5 className="formTitle">New Exercise</h5>
						<NewExerciseForm />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 newGoalForm wc-dashboard--reading">
            <h5 className="formTitle">New Reading</h5>
						<NewBookReadingForm />
          </div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth, goals: state.goals, points: state.points };
}

export default connect(mapStateToProps, actions)(Dashboard);
