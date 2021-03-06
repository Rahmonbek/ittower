import React from "react";
import menyu from "../css/NavbarGroup.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
 
} from "react-router-dom";
import {Container,  Navbar, Nav } from "react-bootstrap";

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
        <NavLink className={menyu.Nav2} to="/">Bosh sahifa</NavLink>
        <NavLink className={menyu.Nav2}  to="/course">Kurslarimiz</NavLink>
        <NavLink className={menyu.Nav2}   to="/contact"> Biz bilan bog`lanish</NavLink>
       </Nav> 
       
    </Navbar.Collapse>
  </Container>
</Navbar>
      </Router>
    </div>
  );
}
