import { combineReducers } from 'redux';
import authReducer from './authReducer';
import goalsReducer from './goalsReducer';
import pointsReducer from './pointsReducer';

export default combineReducers({
  auth: authReducer,
  goals: goalsReducer,
  points: pointsReducer
});
