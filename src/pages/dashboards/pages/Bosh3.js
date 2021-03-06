import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import stayle2 from "../css/Navbar2.module.css";

import vektor1 from "../img/vector1.png";
import vektor2 from "../img/Vector2.png";

import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiDesktop } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";

import "bootstrap/dist/css/bootstrap.min.css";
export default class Bosh3 extends Component {
  render() {
    return (
      <div>
        <div className={stayle2.bosh}>
          <div className={stayle2.title}>
            <p style={{paddingTop:'20px'}} > Top kategoriyalar</p>
          </div>

          <Row className={stayle2.RowMeTop} style={{margin:'auto',aliginItem:'center'}} lg={4} md={1} sm={1}>
            <Col>
              <div className={stayle2.c1}>
                <i
                  class="fa fa-television"
                  style={{ color: "#10C8A0",
                   paddingRight: "15px",
                  }}
                  aria-hidden="true"
                >
                  {" "}
                  <BiDesktop />
                </i>
                Dasturlash
              </div>
            </Col>
            <Col>
              <div className={stayle2.c1}>
                <i style={{ marginRight: "10px", color: "green" }}>
                  <RiFilePaper2Line />
                </i>
                Frond-End
              </div>
            </Col>
            <Col>
              <div className={stayle2.c1}>
                <img
                  src={vektor1}
                  style={{
                    width: "37px",
                    height: "23px",
                    paddingRight: "15px",
                  }}
                  alt="BigCo Inc. logo"
                ></img>
                Back-End
              </div>
            </Col>
            <Col>
              <div className={stayle2.c1}>
                <img
                  src={vektor2}
                  style={{
                    width: "37px",
                    height: "23px",
                    paddingRight: "15px",
                  }}
                  alt="BigCo Inc. logo"
                ></img>
                Design
              </div>
            </Col>
          </Row>






          
        </div><Navbar className={stayle2.Navbar} expand="lg">
            <Container>
              <div className={stayle2.ContainerMenu}>
                <Navbar.Toggle
                  className={stayle2.NavbarMenu}
                  aria-controls="navbarScroll"
                />
                <Navbar.Collapse id="navbarScroll">
                  <Nav id={stayle2.NavbarMenuUl} >
                    <NavLink
                      className={stayle2.NavLinkHover}
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                   
                      }}
                      activeStyle={{ color: "#FFFFFF" }}
                      to="/"
                    >
                      Dasturlash
                    </NavLink>{" "}
                    <NavLink
                      className={stayle2.NavLinkHover}
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                   
                      }}
                      activeStyle={{ color: "#FFFFFF" }}
                      to="/frondend"
                    >
                      Frond-End
                    </NavLink>
                    <NavLink
                     className={stayle2.NavLinkHover}
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                   
                      }}
                      activeStyle={{ color: "#FFFFFF" }}
                      to="/backend"
                    >
                      Back-End
                    </NavLink>
                    <NavLink
                    className={stayle2.NavLinkHover}
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                      }}
                      activeStyle={{ color: "#000000" }}
                      to="/design"
                    >
                      Design
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Container>
          </Navbar>
      </div>
    );
  }
}
