import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Scoreboard extends Component {
  componentDidMount() {
		this.props.fetchAllGoals();
    this.props.fetchAllUsers();
	}

  genderUsers(gender) {
    let allUsers = this.props.users;

    //returns array with googleId's of each
    let users = allUsers.filter(user => user.gender === gender).map(user => { return user.googleId; });

    return users;
  }

  classUsers(grade) {
    let allUsers = this.props.users;

    //returns array with googleId's of each
    let users = allUsers.filter(user => user.class === grade).map(user => { return user.googleId; });

    return users;
  }


  calcPoints(users) {
    let allGoals = this.props.goals;

    // filters all goals to get just sis goals
    let goals = allGoals.filter(goal => users.includes(goal.user_id));

    const points = goals.reduce((sum, goal) => {return sum + parseInt(goal.points, 10)}, 0);

    return points;
  }

  renderPoints() {
    let sisters = this.genderUsers('female');
    let bros = this.genderUsers('male');

    let freshmen = this.classUsers('freshmen');
    let sophomores = this.classUsers('sophomore');
    let juniors = this.classUsers('junior');
    let seniors = this.classUsers('senior');
    let staff = this.classUsers('staff');

    const sisPoints = this.calcPoints(sisters);
    const broPoints = this.calcPoints(bros);

    const froshPoints = this.calcPoints(freshmen);
    const sophPoints = this.calcPoints(sophomores);
    const juniorPoints = this.calcPoints(juniors);
    const seniorPoints = this.calcPoints(seniors);
    const staffPoints = this.calcPoints(staff);

    return (
      <div>
        <div>
          Sis Points: {sisPoints} <br/>
          Bro Points: {broPoints}
        </div>
        <div>
          Frosh: {froshPoints} <br/>
          Sophomores: {sophPoints} <br/>
          Juniors: {juniorPoints} <br/>
          Seniors: {seniorPoints} <br/>
          Staff: {staffPoints}
        </div>
      </div>
		);
	}

	render() {
		return (
			<div>
        {this.renderPoints()}
			</div>
		);
	}
}

function mapStateToProps(state){
  return { users: state.users, goals: state.goals }
}

export default connect(mapStateToProps, actions)(Scoreboard);
