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
import Dashboard from "./components/DashBoard";
import DetailsCours from './components/DetailsCours';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Inscription" component={SignUp}/>
            <Route path="/Connexion" component={SignIn} />
            <Route path="/Liste-des-cours" component={ListeCours} />
            <Route path="/Cours" component={DetailsCours} />
            <Route path="/MonCompte" component={MonCompte} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route component={Error404} />
            <Redirect to='/Error404' />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
