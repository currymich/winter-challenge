import { FETCH_MEMORIZED } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case(FETCH_MEMORIZED):
      return action.payload;
    default:
      return state;
  }
}
