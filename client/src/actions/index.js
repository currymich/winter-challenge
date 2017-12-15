import axios from 'axios';
import { FETCH_USER, FETCH_MEMORIZED } from './types';

export const fetchUser = () => {
  return async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res});
  }
};

export const fetchMemorizedVerses = () => {
  return async dispatch => {
    const res = await axios.get('/goals/bible_memory');
    dispatch({type: FETCH_MEMORIZED, payload: res});
  }
}
