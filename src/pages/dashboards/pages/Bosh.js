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
     
      <Navbar className={menyu.Navbar1} fixed="top" bg="light"  expand="lg">
  <Container>
    <Navbar.Brand href="#"> <img  className={menyu.BrandImg} src={Logo}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{margin:'20px',marginRight:'40px'}} />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav id={menyu.Nav1} className="me-auto">
        <Nav.Link  className={menyu.Nav2} href="/">Bosh sahifa</Nav.Link>
        <Nav.Link className={menyu.Nav2}  href="/course">Kurslarimiz</Nav.Link>
        <Nav.Link className={menyu.Nav2}   href="/contact">Biz bilan bog`lanish</Nav.Link>
       </Nav> 
       
    </Navbar.Collapse>
  </Container>
</Navbar>
      </Router>
    </div>
  );
}
