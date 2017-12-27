import axios from "axios";
import {
	FETCH_USER,
	FETCH_MEMORIZED,
	FETCH_BIBLE_READING,
	UPDATE_USER_POINTS,
  FETCH_USER_GOALS,
	FETCH_ALL_GOALS,
	FETCH_ALL_USERS
} from "./types";
import bibleBookList from "../static_data/bibleBookList";

export const fetchUser = () => {
	return async dispatch => {
		const user = await axios.get("/api/current_user");
		dispatch({ type: FETCH_USER, payload: user });

		const goals = await axios.get(`/goals/user`);
		updateUserPoints(goals.data);
	};
};

export const fetchAllUsers = () => {
	return dispatch => {
		axios.get("/api/users").then(users => {
			dispatch({
				type: FETCH_ALL_USERS,
				payload: users
			})
		})
	}
}

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

export const fetchAllGoals = () => {
  return dispatch => {
    axios.get("/goals").then(goals => {
      dispatch({
        type: FETCH_ALL_GOALS,
        payload: goals
      });
    });
  };
}

function updateUserPoints(goals) {
	return dispatch => {
		var bonusPoints = 0;
		console.log(goals)
		// Separate just the bible reading goals
		// let bibleRead = goals.filter(goal => goal.type === 'bibleReading');
	  //
		// //for each book of the bible, check for completion, increase bonusPoints if true
		// bibleBookList.forEach(book => {
		// 	//separate just the reading from this book
		// 	let filteredReading = bibleRead.filter(goal => goal.book === book.title)
	  //
		// 	//get a list of chapters read for book
		// 	let chapters = filteredReading.map(goal => goal.chapter);
	  //
		// 	chapters.forEach(reading => {
		// 		if(typeof reading === "string" && reading.includes('-')){
		// 	    var split = reading.split('-')
	  //
		// 			var x = parseInt(split[0]);
		// 			var z = split[1];
	  //
		// 			while (x <= z) {
		// 				chapters.push(x)
		// 				x++
	  //   		}
		// 		}
		// 	})
	  //
		// 	//eliminate duplicates, out of range, sort
	  //   	// dupes - stackoverflow.com/questions/11246758
		// 	chapters = chapters.filter((x, i, a) => a.indexOf(x) == i);
		// 		//eliminate too high
		// 	chapters = chapters.filter(x => x <= book.chapters && x > 0)
		// 		//eliminate too low
		// 	chapters = chapters.sort((a, b) => {
	  // 			return a - b;
		// 	})
	  //
		// 	//if every chapter read, increase bonusPoints
		// 	if (chapters.length === book.chapters){
		// 		bonusPoints += parseInt(book.chapters);
		// 	}
		// })

		var points = goals.reduce((sum, goal) => {return sum + parseInt(goal.points, 10)}, 0);
		console.log(points)

		points += bonusPoints;

		dispatch({
			type: UPDATE_USER_POINTS,
			payload: points
		});
	}
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
		axios.post(`${endpointUrl(type)}`, values).then(goals => {
			// dispatch({
			// 	type: UPDATE_USER_POINTS,
			// 	payload: res
			// });

			updateUserPoints(goals.data)

      dispatch({
        type: FETCH_USER_GOALS,
        payload: goals
      })
    })
	};
}

export function deleteGoal(id) {
  return dispatch => {
    axios.delete(`/goals/${id}`)
    .then(goals => {
			// dispatch({
			// 	type: UPDATE_USER_POINTS,
			// 	payload: res
			// })

			updateUserPoints(goals.data)

      dispatch({
        type: FETCH_USER_GOALS,
        payload: goals
      })
    })
  }
}
