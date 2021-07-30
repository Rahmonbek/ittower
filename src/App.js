import React, { Component } from 'react'
import Menyu from './pages/dashboards/Menyu'
import Contact from './pages/dashboards/NavbarMenu/Contact';
import Course from "./pages/dashboards/NavbarMenu/Course";
import { BrowserRouter } from 'react-router-dom';
import { Route,Switch } from "react-router-dom";
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
                        <Menyu />
                      </Route>
                    </Switch></BrowserRouter>
         </div>
    )
  }
}
