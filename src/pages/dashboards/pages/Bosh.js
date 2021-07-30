import React, { Component } from "react";
import style from "../css/Navbar.module.css";
import {
  Dropdown,
  Button,
  NavbarBrand,
  Navbar,
  NavbarToggle,
  Nav,
} from "react-bootstrap";

import logo122 from "../img/12347.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link } from "react-router-dom";

export default class Bosh extends Component {
  render() {
    return (
      <div>
        <header>
          <div
            style={{
              position: "fixed",
              zIndex: "223",
              backgroundColor: "#E5E5E5",
              width: "100%",
            }}
            className={style.header_top}
          >
            <div className={style.container}>
              <div className={style.col_6}>
                <NavbarBrand>
                <div ><img style={{width:'140px',height:'80px'}} src={logo122}/></div>
                </NavbarBrand>
              </div>
             <Navbar style={{backgroundColor:'#E5E5E5'}}> <Navbar.Collapse id="basic-navbar-nav">
   <Nav style={{marginLeft:'20px', }} className="me-auto">
        <Nav.Link style={{fontSize:'20px'}} href="#home">Home</Nav.Link>
        <Nav.Link style={{fontSize:'20px'}} href="#home">Kurslar</Nav.Link>
        <Nav.Link style={{fontSize:'20px'}} href="#link">Contacts</Nav.Link>
      </Nav>
    </Navbar.Collapse></Navbar> 
              
            </div>
          </div>
        </header>
      </div>
    );
  }
}
