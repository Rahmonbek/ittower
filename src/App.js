import React, { Component } from "react";
import { Router } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
 
} from "react-router-dom";
import Bosh from './pages/dashboards/pages/Bosh'
import Course from "./pages/dashboards/NavbarMenu/Course1";
import Home from "./pages/dashboards/NavbarMenu/Home";
import Contact from "./pages/dashboards/NavbarMenu/Contact1";

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Switch>
    
      <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/course">
              <Course />
            </Route>
           
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}
