import { UPDATE_USER_POINTS } from '../actions/types';

export default function(state = 0, action) {
  switch (action.type) {
    case(UPDATE_USER_POINTS):
      const { data } = action.payload;
      const points = data.reduce((sum, goal) => {return sum + parseInt(goal.points)}, 0);
      return points;
    default:
      return state;
  }
}
