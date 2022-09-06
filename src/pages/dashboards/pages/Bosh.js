import React from "react";
import menyu from "../css/NavbarGroup.module.css";
import {
  BrowserRouter as Router,
 
  NavLink,
 
} from "react-router-dom";
import {Container,  Navbar, Nav } from "react-bootstrap";

import Logo from "../img/12347.png";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

export default function NavbarGroup() {
  return (
    <div>
      <Navbar className={menyu.Navbar1} fixed="top" bg="light"  expand="lg">
  <Container>
    <Navbar.Brand href="#"> <img  className={menyu.BrandImg} src={Logo}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{margin:'20px',marginRight:'40px'}} />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav id={menyu.Nav1} className="me-auto">
        <NavLink style={{color:'#120c3b'}} activeStyle={{color:'#fa9905'}} className={menyu.Nav2} exact to='/'>Bosh sahifa</NavLink>
        <NavLink style={{color:'#120c3b'}} activeStyle={{color:'#fa9905'}} className={menyu.Nav2}  to='/course/'>Kurslarimiz</NavLink>
        <NavLink style={{color:'#120c3b'}} activeStyle={{color:'#fa9905'}} className={menyu.Nav2}   to='/contact/'>Biz bilan bog`lanish</NavLink>
       </Nav> 
       
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}
