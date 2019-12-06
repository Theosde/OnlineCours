import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import coursReducer from "./coursReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cours: coursReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
