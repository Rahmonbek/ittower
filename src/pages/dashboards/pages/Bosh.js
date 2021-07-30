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
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Link } from "react-router-dom";


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
            <img src={logo122} style={{width:'75px',height:'75px'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.selectLanguage}> 
           
                <BrowserRouter>
                  
                <Nav.Link>  <Link to="/">Home</Link></Nav.Link> 
                <Nav.Link>  <Link to="/course">Course</Link></Nav.Link> 
                <Nav.Link>     <Link to="/contact">Contact</Link></Nav.Link>  
                  
                </BrowserRouter>
  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
