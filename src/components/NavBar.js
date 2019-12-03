import React, { Component } from "react"
import { Link } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
            <ul>
              <li>
                <Link to='/Connexion'>Connexion</Link>
              </li>
              <li>
                <Link to='/Inscription'>Inscription</Link>
              </li>
              <li>
                <Link to='/'>Accueil</Link>
              </li>
              <li>
                <Link to='/Liste-des-cours'>Cours</Link>
              </li>
              <li>
                <Link to='/MonCompte'>Mon compte</Link>
              </li>
              <li>
                <Link to='/Dashboard-user'>Dashboard</Link>
              </li>
            </ul>
        </div>
        <div className="border-gradient"></div>
      </div>
    );
  }
}

export default Navbar;
