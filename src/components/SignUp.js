import React, { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/actions/authActions";
import "./SignUp.css";

function SignUp(props) {
  const { authError, auth } = props;

  const [dataFormSignUp, setDataFormSignUp] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errorForm, setErrorForm] = useState({
    firstname: null,
    lastname: null,
    birthdate: null,
    email: null,
    password: null,
    confirmPassword: null,
    error: false
  });

  if (auth.uid) {
    props.history.push("/Liste-des-cours");
  }

  var handleChange = e => {
    var copyFormData = { ...dataFormSignUp };
    copyFormData[e.target.name] = e.target.value;
    setDataFormSignUp(copyFormData);
  };

  var handleConfirme = e => {
    e.preventDefault();
    var copyFormData = dataFormSignUp;
    var copyErrorForm = errorForm;

    copyErrorForm = {
      firstname: null,
      lastname: null,
      birthdate: null,
      email: null,
      password: null,
      confirmPassword: null,
      error: false
    };

    // verif email
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(copyFormData.email)) {
      copyErrorForm.email = "Format de email invalide";
      copyErrorForm.error = true;
    }

    // verif password
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (regexPassword.test(copyFormData.password)) {
      if (copyFormData.password != copyFormData.confirmPassword) {
        copyErrorForm.confirmPassword = "Confirme Password invalide";
        copyErrorForm.error = true;
      }
    } else {
      copyErrorForm.password =
        "Format password invalide au moins 6 caractère dont une lettre en Maj et un Chiffre";
      copyErrorForm.error = true;
    }

    // VERIF DATE
    var regexDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if (regexDate.test(copyFormData.birthdate)) {
    } else {
      copyErrorForm.date = "Formate de la date invalide";
      copyErrorForm.error = true;
    }

    // VERIF ERROR
    if (copyErrorForm.error) {
      console.log(copyFormData);
      console.log(copyErrorForm);
      setErrorForm(copyErrorForm);
    } else {
      copyFormData["birthdate"] = new Date(copyFormData.birthdate);
      console.log(copyFormData);
      props.signUp(copyFormData);
    }
  };

  return (
    <div className="background-bg">
      <div className="center-form">
        <form onSubmit={handleConfirme} className="signUpFormContainer">
          <h1>REGISTER</h1>
          <input
            name="firstname"
            type="text"
            placeholder="firstname"
            value={dataFormSignUp.firstname}
            onChange={handleChange}
          />
          <input
            name="lastname"
            type="text"
            placeholder="lastname"
            value={dataFormSignUp.lastname}
            onChange={handleChange}
          />
          <input
            name="birthdate"
            type="date"
            value={dataFormSignUp.birthdate}
            onChange={handleChange}
          />
          {errorForm.birthdate ? <p>{errorForm.birthdate}</p> : null}
          <input
            name="email"
            type="text"
            placeholder="Email Address"
            value={dataFormSignUp.email}
            onChange={handleChange}
          />
          {errorForm.email ? <p>{errorForm.email}</p> : null}

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={dataFormSignUp.password}
            onChange={handleChange}
          />
          {errorForm.password ? <p>{errorForm.password}</p> : null}

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={dataFormSignUp.confirmPassword}
            onChange={handleChange}
          />
          {errorForm.confirmPassword ? (
            <p>{errorForm.confirmPassword}</p>
          ) : null}

          <button type="submit">S'inscrire</button>
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
    signUp: dataForm => dispatch(signUp(dataForm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
