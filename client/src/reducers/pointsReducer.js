import { UPDATE_USER_POINTS } from '../actions/types';

export default function(state = 0, action) {
  switch (action.type) {
    case(UPDATE_USER_POINTS):
    console.log('hit')
      return action.payload;
    default:
      return state;
  }
}
