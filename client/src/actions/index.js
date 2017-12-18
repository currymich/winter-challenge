import axios from 'axios';
import { FETCH_USER, FETCH_MEMORIZED, FETCH_BIBLE_READING, UPDATE_USER_POINTS } from './types';

export const fetchUser = () => {
  return async dispatch => {
    const user = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: user});

    const goals = await axios.get(`/goals/user`);
    dispatch(updateUserPoints(goals))
  }
};

export const updateUserPoints = (goals) => {
  return {
    type: UPDATE_USER_POINTS,
    payload: goals
  }
}

export const fetchMemorizedVerses = () => {
  return async dispatch => {
    const res = await axios.get('/goals/bible_memory');
    dispatch({type: FETCH_MEMORIZED, payload: res});
  }
}

export const fetchBibleReading = () => {
  return async dispatch => {
    const res = await axios.get('/goals/bible_reading');
    dispatch({type: FETCH_BIBLE_READING, payload: res});
  }
}

export const newBibleReading = (values, history) => {
  axios.post('/goals/bible_reading', values);
  return;
};
