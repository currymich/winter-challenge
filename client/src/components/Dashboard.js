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
		return auth ? <p>Welcome back <br /><span className="wc-dashboard--user">{auth.name}</span></p> : <h3>User dashboard <br /> Sign in to see your scores</h3>;
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
          {/*
          <div className='wc-landing--section leaderboard'>
            <h3>Leaderboard</h3>
            <ul className='leaderboard-list'>
              <li className='leaderboard-profile'>
                <div className='leaderboard-rank'>1</div>
                <div className='leaderboard-name'>Ming Mang</div>
                <div className='leaderboard-points'>300</div>
              </li>
              <li className='leaderboard-profile'>
                <div className='leaderboard-rank'>2</div>
                <div className='leaderboard-name'>Ching Chang</div>
                <div className='leaderboard-points'>200</div>
              </li>
              <li className='leaderboard-profile'>
                <div className='leaderboard-rank'>3</div>
                <div className='leaderboard-name'>Ding Dang</div>
                <div className='leaderboard-points'>100</div>
              </li>
            </ul>
          </div>*/}
				</div>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth, goals: state.goals, points: state.points };
}

export default connect(mapStateToProps, actions)(Dashboard);
