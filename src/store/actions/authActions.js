import { getFirestore } from "redux-firestore";

export const signIn = dataFormSignin => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(dataFormSignin.email, dataFormSignin.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(() => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getfirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("USERS")
          .doc(resp.user.uid)
          .set({
            NOM: newUser.lastname,
            PRENOM: newUser.firstname,
            EMAIL: newUser.email,
            BIRTHDATE: newUser.birthdate
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .then(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
