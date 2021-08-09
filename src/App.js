import React, { Component } from "react";
import { Router } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
 
} from "react-router-dom";

import Course from "./pages/dashboards/NavbarMenu/Course1";
import Home from "./pages/dashboards/NavbarMenu/Home";
import Contact from "./pages/dashboards/NavbarMenu/Contact1";

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/course">
              <Course />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}
