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
      .catch(err => {
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
            BIRTHDATE: newUser.birthdate,
            COURS: [],
            ADMIN: false,
            AVATAR: ''
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        console.log(err);

        if (err.code === "auth/email-already-in-use") {
          err.message = "Cette email est déja associées à un compte";
        }
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
//RESET EMAIL


export const resetEmail = newEmail => {
  return(dispatch,getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(newEmail)
    var user = firebase.auth().currentUser;

    console.log(user)
    user.updateEmail(newEmail)
    .then(() =>
    dispatch({
      type: "RESET_MAIL_SUCCESS",
      payload: "Un lien vous à été envoyer par Email pour modifier votre adresse Email"
    })
  )
  .catch(err => {
    dispatch({
      type: "RESET_MAIL_ERROR",
      payload: "Fail send Email to reset your Email"
    });
  });
}}


//PASSWORD RESET

export const resetPassword = email => {
  return(dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(firebase)
    firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() =>
      dispatch({
        type: "RESET_SUCCESS",
        payload: "Un lien vous à été envoyer par Email pour modifier votre mot de passe"
      })
    )
    .catch(err => {
      dispatch({
        type: "RESET_ERROR",
        payload: "Fail send Email to reset password"
      });
    });
  }}

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

