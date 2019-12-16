import React, { Component } from "react";
import "./index.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ListeCours from "./components/ListeCours";
import MonCompte from "./components/MonCompte";
import DashBoard from "./components/DashBoard";
import DashBoardAdmin from "./components/DashboardAdmin";
import DetailsCours from "./components/DetailsCours";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Inscription" component={SignUp} />
            <Route path="/Connexion" component={SignIn} />
            <Route path="/Liste-des-cours" component={ListeCours} />
            <Route
              path="/Cours/:idCours/:nomChapitre"
              component={DetailsCours}
            />
            <Route path="/MonCompte" component={MonCompte} />
            <Route path="/Dashboard" component={DashBoardAdmin} />
            <Route path="/Error404" component={Error404} />
            <Redirect to="/Error404" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
