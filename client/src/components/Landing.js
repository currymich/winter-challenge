import React, { Component } from 'react';
import RecentAllGoals from "./goals/recentAllGoalsIndex.js";
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
      </div>
    )
  }
}



export default connect(null, actions)(Landing);
