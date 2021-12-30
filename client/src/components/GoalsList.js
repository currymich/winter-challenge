import React from "react";
import styled from "styled-components";
import _ from "lodash";
import goalTypes from "../constants/goalTypes";
import moment from "moment";

const ListContainer = styled.div`
  text-align: left;
  margin-top: 8%;
  margin-bottom: 8%;

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

  max-height: 450px;
  overflow-y: scroll;
`;

const ListItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  margin: 0em 2.5em;
  padding: 1.5em 0;
  height: 88px;

  &:last-of-type {
    border: none;
  }

  & button {
    font-size: 1.5rem;
    padding: 0 10px;
  }
`;

const GoalsList = ({ goals, title, self, deleteGoal, style }) => {
  const sortGoalsByDate = () =>
    [...goals].sort(
      (a, b) => new Date(b.date_created) - new Date(a.date_created)
    );

  const renderDate = (date, includeTime = true) =>
    moment(date).format(includeTime ? "ddd MMM DD [-] h:mm A" : "ddd MMM DD");

  const typeToAction = (goal) => {
    switch (goal.type) {
      case "readBook":
        return `${self ? "You" : goal.user_name} read ${
          goal.data.pages
        } pages of ${goal.data.title}`;
      case "readBible":
        return `${self ? "You" : goal.user_name} read ${goal.data.reference}`;
      case "memorizeVerse":
      case "memorizeChapter":
        return `${self ? "You" : goal.user_name} memorized ${
          goal.data.reference
        }`;
      case "specialTalk":
        return `${self ? "You" : goal.user_name} created a talk on ${
          goal.data.subject
        }`;
      case "shareGospel":
        return `${self ? "You" : goal.user_name} shared with ${
          goal.data.audience
        }`;
      case "exercise":
      case "chores":
        return `${self ? "You" : goal.user_name} ${
          goal.data.exercise || goal.data.chore
        } for ${parseInt(goal.data.duration)} minutes`;
      case "devotions":
        return `${self ? "You" : goal.user_name} did DT on ${renderDate(
          goal.data.date,
          false
        )}`;
      default:
        return goalTypes[goal.type]
          ? `${self ? "You" : goal.user_name} ${goalTypes[goal.type].label}`
          : "";
    }
  };

  const renderGoals = () => {
    let goals = sortGoalsByDate();

    if (goals[0] === undefined) {
      return <div>Enter your first goal below!</div>;
    }

    return _.map(goals, (goal) => {
      return (
        <ListItem key={goal._id}>
          <div>
            {renderDate(goal.date_created)} <br /> {typeToAction(goal)}
          </div>
          {deleteGoal && (
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
          )}
        </ListItem>
      );
    });
  };

  const onDeleteClick = (id) => {
    deleteGoal(id);
  };

  return (
    <ListContainer style={style}>
      <h3>{title}</h3>
      <List>{renderGoals()}</List>
    </ListContainer>
  );
};

export default GoalsList;
