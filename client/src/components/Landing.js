import React, { Component } from 'react';
import RecentAllGoals from "./goals/recentAllGoalsIndex.js";
import Scoreboard from "./Scoreboard";
// import InfoPage from "./ChallengeInfo";
import { connect } from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {
  componentDidMount() {
		this.props.fetchAllGoals();
	}

  render() {
    return (
      <div className='wc-landing--wrapper'>
        <div className='wc-landing--heading'>
          <h1>
            Senior<br/>Summer<br/>Challenge
          </h1>
        </div>
        {/* <div className='wc-landing--section'>
          <div>
            <InfoPage />
          </div>
        </div> */}
        <div className="wc-dashboard--recent">
          <RecentAllGoals />
        </div>
        <div>
          <Scoreboard />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { goals: state.goals }
}

export default connect(mapStateToProps, actions)(Landing);
