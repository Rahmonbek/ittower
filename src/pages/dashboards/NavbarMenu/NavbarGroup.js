import React from "react";
import menyu from "../css/NavbarGroup.module.css";
import { BrowserRouter as Router, Switch, Route, NavLink,Link } from "react-router-dom";
import { Container, Navbar, Nav,  } from "react-bootstrap";
import Course from "./Course";
import Home from "./Home";
import Contact from "./Contact";
import Logo from '../img/12347.png'

export default function NavbarGroup() {
  return (
    <div>
      <Router>
        <div>
          
            <Navbar className={menyu.navbarMenu} collapseOnSelect expand="lg">
              <Container>
              <Navbar.Brand style={{width:'65px', height:'65px'}} href="#home">
                  <img style={{width:'100%',height:'100%'}} src={Logo} />
              </Navbar.Brand>

                <Navbar.Toggle
                  className={menyu.navbarToggle}
                  aria-controls="responsive-navbar-nav"
                />
                <ul >
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
              </Container>
            </Navbar>
          
        

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
