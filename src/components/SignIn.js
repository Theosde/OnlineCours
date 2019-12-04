import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../store/actions/authActions";

import './SignIn.css';


function SignIn(props) {
  const { authError, auth } = props;

  const [dataFormSignIn, setDataFormSignIn] = useState({
    email: "",
    password: ""
  });

  var handleSubmit = e => {
    e.preventDefault();
    props.signIn(dataFormSignIn);
  };

  if (auth.uid) {
    props.history.push("/Dashboard");
  }

  return (
    <div className='background-bg'>
      <div className='center-form'>
       <form onSubmit={handleSubmit} className="signUpFormContainer">
          <h1>CONNEXION</h1>
          <input
            name="email"
            type="text"
            id="email"
            placeholder="Email Address"
            onChange={e => {
              var copyFormData = { ...dataFormSignIn };
              copyFormData.email = e.target.value;
              setDataFormSignIn(copyFormData);
            }}
          />
          <input
            name="passwordOne"
            type="password"
            id="password"
            placeholder="Password"
            onChange={e => {
              var copyFormData = { ...dataFormSignIn };
              copyFormData.password = e.target.value;
              setDataFormSignIn(copyFormData);
            }}
          />

          <button type="submit">Se connecter</button>
          {authError ? <p>{authError}</p> : null}
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: dataForm => dispatch(signIn(dataForm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
