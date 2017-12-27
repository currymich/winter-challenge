import { combineReducers } from 'redux';
import authReducer from './authReducer';
import goalsReducer from './goalsReducer';
import pointsReducer from './pointsReducer';
import usersReducer from './usersReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  goals: goalsReducer,
  points: pointsReducer,
  users: usersReducer,
  form: reduxFormReducer
});
