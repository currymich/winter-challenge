import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NewBibleReadingForm from './goals/NewBibleReadingForm.js';
import NewBibleMemoryForm from './goals/NewBibleMemoryForm.js';



class Dashboard extends Component {
  componentDidMount(){
    this.props.fetchBibleReading();
  }

  renderWelcome(){
    const {auth} = this.props;
    return(auth ? `Welcome back ${auth.name}` : `User dashboard`);
  }

  render(){
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h3>{this.renderWelcome()}</h3>
          <strong>You currently have {this.props.points} points</strong>
        </div>

        <div style={{ marginTop: '10em' }}>
          <div><NewBibleMemoryForm/></div>
          <div><NewBibleReadingForm/></div>
          <div>Exercise entry form</div>
          <div>Book Reading entry form</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { auth: state.auth, goals: state.goals, points: state.points };
};

export default connect(mapStateToProps, actions)(Dashboard);
