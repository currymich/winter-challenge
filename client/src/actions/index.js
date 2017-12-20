import axios from "axios";
import {
	FETCH_USER,
	FETCH_MEMORIZED,
	FETCH_BIBLE_READING,
	UPDATE_USER_POINTS,
  FETCH_USER_GOALS
} from "./types";

export const fetchUser = () => {
	return async dispatch => {
		const user = await axios.get("/api/current_user");
		dispatch({ type: FETCH_USER, payload: user });

		const goals = await axios.get(`/goals/user`);
		dispatch(updateUserPoints(goals));
	};
};

export const fetchUserGoals = () => {
  return dispatch => {
    axios.get("/goals/user").then(goals => {
      dispatch({
        type: FETCH_USER_GOALS,
        payload: goals
      });
    });
  };
}

export const updateUserPoints = goals => {
	return {
		type: UPDATE_USER_POINTS,
		payload: goals
	};
};

export const fetchMemorizedVerses = () => {
	return async dispatch => {
		const res = await axios.get("/goals/bible_memory");
		dispatch({ type: FETCH_MEMORIZED, payload: res });
	};
};

export const fetchBibleReading = () => {
	return async dispatch => {
		const res = await axios.get("/goals/bible_reading");
		dispatch({ type: FETCH_BIBLE_READING, payload: res });
	};
};

export function createGoal(values, type) {

  const endpointUrl = type => {
		switch (type) {
			case "bibleReading":
				return "/goals/bible_reading";
			case "bibleMemory":
				return "/goals/bible_memory";
			case "bookReading":
				return "/goals/book_reading";
			case "exercise":
				return "/goals/exercise";
      default:
		}
	};

//processing logic for bible reading type goals to allow multi-chp
  if(type === "bibleReading" && values.chapter.includes('-')){
    var chapters = values.chapter.split('-');
    values.points = (chapters[1] - chapters[0] + 1) * 2;
  }

//logic for book reading goals - split coded value from title
  if(type === "bookReading"){
    values.points = values.bookTitle.substr(0, 3);
    values.book = values.bookTitle.substr(3);
  }

//logic for exercise - 10*(# of miles)
  if(type === "exercise"){
    values.points = values.distance * 10;
  }

	return dispatch => {
		axios.post(`${endpointUrl(type)}`, values).then(res => {
			dispatch({
				type: UPDATE_USER_POINTS,
				payload: res
			});

      return res;
		}).then(res => {
      dispatch({
        type: FETCH_USER_GOALS,
        payload: res
      })
    })
	};
}

export function deleteGoal(id) {
  return dispatch => {
    axios.delete(`/goals/${id}`)
    .then(res => {
			dispatch({
				type: UPDATE_USER_POINTS,
				payload: res
			})
      return res;
		}).then(res => {
      dispatch({
        type: FETCH_USER_GOALS,
        payload: res
      })
    })
  }
}
