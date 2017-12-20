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
		return auth ? <p>Welcome back <br /><span className="wc-dashboard--user">{auth.name}</span></p> : <h3>User dashboard</h3>;
	}

	render() {
		return (
			<div className='wc-dashboard--wrapper'>
				<div className='wc-dashboard--header'>
          <div>
					{this.renderWelcome()}
					<strong>You currently have<br/><span className='wc-dashboard--points'>{this.props.points}</span> points</strong>
          </div>
				</div>

				<div className='wc-dashboard--body'>
          <div className="wc-dashboard--recent">
            <RecentGoals />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="newGoalForm wc-dashboard--verses">  
    						<NewBibleMemoryForm />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="newGoalForm wc-dashboard--bible">
    						<NewBibleReadingForm />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="newGoalForm wc-dashboard--exercise">
    						<NewExerciseForm />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="newGoalForm wc-dashboard--reading">
    						<NewBookReadingForm />
              </div>
            </div>
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
