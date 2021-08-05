import React from "react";
import menyu from "../css/NavbarGroup.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
 
} from "react-router-dom";
import {Container,  Navbar, Nav } from "react-bootstrap";
import Course from "./Course";
import Home from "./Home";
import Contact from "./Contact";
import Logo from "../img/12347.png";

export default function NavbarGroup() {
  return (
    <div>
      <Router>
     
      <Navbar className={menyu.Navbar1} fixed="top" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#"> <img  className={menyu.BrandImg} src={Logo}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav id={menyu.Nav1} className="me-auto">
        <Nav.Link  className={menyu.Nav2} href="/">Bosh sahifa</Nav.Link>
        <Nav.Link className={menyu.Nav2}  href="/course">Kurslarimiz</Nav.Link>
        <Nav.Link className={menyu.Nav2}   href="/contact">Biz bilan bog`lanish</Nav.Link>
       </Nav> 
       
    </Navbar.Collapse>
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
        
      </Router>
    </div>
  );
}
