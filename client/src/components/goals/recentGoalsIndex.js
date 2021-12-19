import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { useGoalsState } from "../../providers/Goals";
import goalTypes from "../../constants/goalTypes";
import moment from "moment";

const ListContainer = styled.div`
  text-align: left;
  margin-top: 8%;
  margin-bottom: 8%;
  padding: 0 5%;

  max-width: 768px;
  margin: 50px auto;

  & h3 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 2%;
    color: #fff;
  }
`;

const List = styled.div`
  background-color: #000;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 5px;
  padding: 1%;
`;

const ListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  margin: 0em 2.5em;
  padding: 1.5em 0;

  &:last-of-type {
    border: none;
  }

  & button {
    font-size: 1.5rem;
    padding: 0 10px;
  }
`;

const RecentUserGoals = () => {
  const { userGoals, deleteGoal } = useGoalsState();
  const sortGoalsByDate = () => {
    const goals = [...userGoals].sort(
      (a, b) => new Date(b.date_created) - new Date(a.date_created)
    );

    return goals;
  };

  const renderDate = (date) => {
    return moment(date).format("ddd MMM DD [-] h:mm A");
  };

  const typeToAction = (goal) => {
    console.log(goal.du)
    switch (goal.type) {
      case "readBook":
        return `You read ${goal.data.pages} pages of ${goal.data.title}`;
      case "readBible":
        return `You read ${goal.data.reference}`;
      case "memorizeVerse":
      case "memorizeChapter":
        return `You memorized ${goal.data.reference}`;
      case "specialTalk":
        return `You created a talk on ${goal.data.subject}`;
      case "shareGospel":
        return `You shared with ${goal.data.audience}`;
      case "exercise":
      case "chores":
        return `You did ${
          goal.data.exercise || goal.data.chore
        } for ${parseInt(goal.data.duration)} minutes`;
      default:
        return goalTypes[goal.type] ? `You ${goalTypes[goal.type].label}` : "";
    }
  };

  const renderPosts = () => {
    let goals = sortGoalsByDate();

    if (goals[0] === undefined) {
      return <div>Enter your first goal below!</div>;
    }

    return _.map(goals.slice(0, 5), (goal) => {
      return (
        <ListItem key={goal._id}>
          <div>
            {renderDate(goal.date_created)} <br /> {typeToAction(goal)}
          </div>
          <div>
            <button
              className="btn btn-danger pull-xs-right"
              onClick={() => {
                onDeleteClick(`${goal._id}`);
              }}
            >
              Delete
            </button>
          </div>
        </ListItem>
      );
    });
  };

  const onDeleteClick = (id) => {
    deleteGoal(id);
  };

  return (
    <ListContainer>
      <h3>Your Recently Completed Goals</h3>
      <List>{renderPosts()}</List>
    </ListContainer>
  );
};

// function mapStateToProps(state) {
// 	return { goals: state.goals };
// }

export default RecentUserGoals;
