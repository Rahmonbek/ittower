import React, { Component } from "react";
import styles from "../css/Bosh.module.css";
import {
  Navbar,
  Container,
  Nav,
  Button,
  ControlLabel,
  Selection,
  Modal,
  FormGroup,
  FormControl,
  Form,
} from "react-bootstrap";

import logo122 from "../img/12347.png";
import logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import Contact from "../NavbarMenu/Contact";
import Course from "../NavbarMenu/Course";
import Home from "../NavbarMenu/Home";

export default function Bosh() {
  return (
    <div>
      <Navbar
        className={styles.navbar}
        style={{ backgroundColor: "#FFFFFF" }}
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo122} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.selectLanguage}>
              <div>
                <Router>
                  <div>
                    <nav>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/course">Course</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>

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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
