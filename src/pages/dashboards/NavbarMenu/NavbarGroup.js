import React from "react";
import menyu from "../css/NavbarGroup.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Course from "./Course";
import Home from "./Home";
import Contact from "./Contact";
import Logo from "../img/12347.png";

export default function NavbarGroup() {
  return (
    <div>
      <Router>
        <div><div className={menyu.NavBarMenuOut}>
          <Navbar className={menyu.navbarMenu} collapseOnSelect expand="lg">
            
              <Navbar.Brand
              className={menyu.BrandImg}
                href="#home"
              >
                <img
                  className={menyu.BrandImgMe}
                    src={Logo}
                />
              </Navbar.Brand>

              <Navbar.Toggle
                className={menyu.navbarToggle}
                aria-controls="responsive-navbar-nav"
                class="ml-auto"
              />
              <ul>
                <Navbar.Collapse
                  className={menyu.navbarCollapse}
                  id="responsive-navbar-nav"
                >
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                        activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/"
                      >
                        <p className={menyu.linked}>Home</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                        activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/course"
                      >
                        <p className={menyu.linked}>Course</p>
                      </NavLink>
                    </li>
                  </Nav>
                  <Nav className="ml-auto">
                    <li>
                      <NavLink
                        activeClassName={menyu.selected}
                        style={{ textDecoration: "none", color: "#9DA7BB" }}
                        activeStyle={{
                          color: "#010101",
                        }}
                        to="/contact"
                      >
                        <p className={menyu.linked}>Contact</p>
                      </NavLink>
                    </li>
                  </Nav>
                </Navbar.Collapse>
              </ul>
            
          </Navbar>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
        </div>
      </Router>
    </div>
  );
}
