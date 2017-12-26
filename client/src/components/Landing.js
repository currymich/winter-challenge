import React, { Component } from 'react';
import RecentAllGoals from "./goals/recentAllGoalsIndex.js";
import Scoreboard from "./Scoreboard";
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
            Element<br/>Winter<br/>Challenge
          </h1>
        </div>
        <div className='wc-landing--section'>
          <p>Track progress on your winter challenge goals, earn points, win prizes!</p>
        </div>
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
