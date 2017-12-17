import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dashboard extends Component {

  renderWelcome(){
    const {auth} = this.props;
    return(auth ? `Welcome back ${auth.name}` : `User dashboard`);
  }

  render(){
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h3>{this.renderWelcome()}</h3>
          <strong>Add completed goals below</strong>
        </div>

        <div style={{ marginTop: '10em' }}>
          <div>Bible Reading entry form</div>
          <div><NewBibleMemoryForm/></div>
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
