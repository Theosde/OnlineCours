import React, {useEffect, useState} from "react";
import { Link, Redirect } from "react-router-dom";

import "./Navbar.css";

import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { storage } from '../config'

function Navbar(props) {
  const [url,setUrl] = useState('')
  const { auth } = props;

useEffect(()=>{
  console.log('je suis ds le useffect')
  console.log(auth.uid)
  var listRef = storage.ref('images/' + auth.uid);

  // Find all the prefixes and items.
  listRef.listAll().then(function(res) {

    var ListeAvatar = []
    var regexDeLEnfer = /[0-9]{1,}/;

    res.items.forEach(function(itemRef) {
      var ExtractNumberOfName = itemRef.name.match(regexDeLEnfer)

      ListeAvatar.push({number:ExtractNumberOfName[0], name:itemRef.name})
      console.log('itemRef')
      console.log(itemRef)
    });

    function compare(x, y) {
      return y.number - x.number;
  }
    ListeAvatar.sort(compare)

     storage.ref('images/' + auth.uid + '/' + ListeAvatar[0].name).getDownloadURL().then(url =>{
      console.log(url)
      setUrl(url)
    })

  }).catch(function(error) {
    // Uh-oh, an error occurred!
  });
},[auth])

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
            <div className='nav-avatar-default'><img className='nav-avatar-user-img' src={url} alt="" width="55" height="55"></img></div>
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
