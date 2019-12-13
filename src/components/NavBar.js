import React from "react";
import { Link, Redirect } from "react-router-dom";

import "./Navbar.css";

import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

function Navbar(props) {
  const { auth } = props;


const NavbarDeco = () =>
  (
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
        </ul>
  )


const NavbarCo = () =>
  (
        <ul>
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
            <button className="deco-btn" onClick={props.signOut}>DECONNEXION</button>
          </li>
          <li>
            <div className='nav-avatar'><img src=''></img></div>
          </li>
        </ul>
  )


  return (
    <div>
      {!auth.uid ? <Redirect push to="/" /> : null}
      <div className="navbar">
        {
          auth.uid ? <NavbarCo/> : <NavbarDeco/>
        }
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
