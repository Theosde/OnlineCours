import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import getGoal from "./createGoal";

const rootReducer = combineReducers({
  firestoreGoals: firestoreReducer,
  firebase: firebaseReducer,
  getGoal: getGoal
});

export default rootReducer;
