import { FETCH_MEMORIZED, FETCH_BIBLE_READING, FETCH_USER_GOALS, FETCH_ALL_GOALS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case(FETCH_MEMORIZED):
      return [...state, {bible_memory: action.payload.data}];
    case(FETCH_BIBLE_READING):
      return [...state, {bible_reading: action.payload.data}];
    case(FETCH_USER_GOALS):
      return action.payload.data;
    case(FETCH_ALL_GOALS):
      return action.payload.data;
    default:
      return state;
  }
}
