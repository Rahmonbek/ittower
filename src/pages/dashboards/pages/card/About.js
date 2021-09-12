import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dasturlash from "./Dasturlash";
import Dizayn from "./Dizayn";
import Marketing from "./Marketing";
import Biznes from "./Biznes";

import Bosh4 from "../Bosh3";
export default class About extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Bosh4 />
          <Switch>
            <Route exact path="/design">
              <Biznes />
            </Route>
            <Route exact path="/backend">
              <Marketing />
            </Route>
            <Route exact path="/frondend">
              <Dizayn />
            </Route>
            <Route exact path="/">
              <Dasturlash />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
