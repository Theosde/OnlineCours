import { getFirestore } from "redux-firestore";

export const getAllCours = () => {
  return (dispatch, getState, { getFirebase, getfirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("COURS")
      .orderBy("TITRE", "asc")
      .then(() => {
        dispatch({ type: "GET_COURS" });
      });
  };
};

export const createCours = cours => {
  return (dispatch, getState, { getFirebase, getfirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("COURS")
      .add({})
      .then(() => {
        dispatch({ type: "CREATE_COURS", cours });
      })
      .catch(err => {
        dispatch({ type: "CREATE_COURS_ERROR", err });
      });
  };
};
