import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from '../css/Bosh4.module.css'

export default class Bosh4 extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle className={styles.NavbarMenu} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
              id={styles.NavBarUl}
            > 
              <Nav.Link href="#action1">
                <NavLink
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                  }}
                  activeStyle={{ color: "#010101" }}
                  to="/dasturlash"
                >
                  Dasturlash
                </NavLink>{" "}
              </Nav.Link>
              <Nav.Link href="#action1">
                <NavLink
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                  }}
                  activeStyle={{ color: "#010101" }}
                  to="/dizayn"
                >
                  Dizayn
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#action1">
                <NavLink
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                    color: "white",
                  }}
                  activeStyle={{ color: "#FFFFFF" }}
                  to="/marketing"
                >
                  Marketing
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#action1">
                <NavLink
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                  }}
                  activeStyle={{ color: "#010101" }}
                  to="/biznes"
                >
                  Biznes
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#action1">
                <NavLink
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                  activeStyle={{ color: "#010101" }}
                  to="/salomatlik"
                >
                  Salomatlik
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#action1">
                <NavLink
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                  activeStyle={{ color: "#010101" }}
                  to="/menejment"
                >
                  Menejment
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#action1">
                <NavLink
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                  activeStyle={{ color: "#010101" }}
                  to="/buxgalteriya"
                >
                  Buxgalteriya
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#action1">
                <NavLink
                  style={{
                    textDecoration: "none",
                    fontSize: "22px",
                    color: "#000000",
                  }}
                  activeStyle={{ color: "#010101" }}
                  to="/tarmoq"
                >
                  Tarmoq
                </NavLink>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
