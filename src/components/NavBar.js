import React from "react";
import { Link, Redirect } from "react-router-dom";

import "./Navbar.css";

import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

function Navbar(props) {
  const { auth } = props;

  return (
    <div>
      {!auth.uid ? <Redirect push to="/" /> : null}
      <div className="navbar">
        <ul>
          <li>
            <Link to="/Connexion">Connexion</Link>
          </li>
          <li>
            <Link to="/Inscription">Inscription</Link>
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Liste-des-cours">Cours</Link>
          </li>
          <li>
            <Link to="/MonCompte">Mon compte</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={props.signOut}>Deconnexion</button>
          </li>
        </ul>
      </div>
      <div className="border-gradient"></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(signOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
