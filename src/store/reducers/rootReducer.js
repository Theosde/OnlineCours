import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import getGoal from "./createGoal";

const rootReducer = combineReducers({
  firestoreGoals: firestoreReducer,
  getGoal: getGoal
});

export default rootReducer;
