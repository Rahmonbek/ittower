import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import stayle2 from "../css/Navbar2.module.css";

import vektor1 from "../img/vector1.png";
import vektor2 from "../img/Vector2.png";

import { Nav, Navbar } from "react-bootstrap";
import { NavLink  } from "react-router-dom";
import { BiDesktop } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";

import "bootstrap/dist/css/bootstrap.min.css";
export default class Bosh3 extends Component {
  render() {
    return (
      <div>
        <div className={stayle2.bosh}>
          <div className={stayle2.title} style={{ fontSize: "3vw" }}>
            Top kategoriyalar
          </div>

         

          <Row
            style={{
              marginTop: "60px",
              marginBottom: "60px",
              marginRight: "60px",
              marginLeft: "60px",
              textAlign: "center",
            }}
            lg={4}
            md={2}
            sm={1}
          >
            <Col>
              <div className={stayle2.c1}>
                <i
                  class="fa fa-television"
                  style={{ color: "#10C8A0", paddingRight: "15px" }}
                  aria-hidden="true"
                > <BiDesktop/></i>
                Dasturlash
              </div>
            </Col>
            <Col>
              <div className={stayle2.c2}>
               <i style={{marginRight:'10px', color:'green'}}>
                 <RiFilePaper2Line/>
               </i>
                Frond-End
              </div>
            </Col>
            <Col>
              <div className={stayle2.c3}>
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
              <div className={stayle2.c4}>
                <img
                  src={vektor2}
                  style={{
                    width: "37px",
                    height: "23px",
                    paddingRight: "15px",
                  }}
                  alt="BigCo Inc. logo"
                ></img>
                Dizayn
              </div>
            </Col>
         
          
           
          </Row>

          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{margin:'auto',textAlign:'center', maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">
                  <NavLink
                    style={{
                      textDecoration: "none",
                      fontSize: "22px",
                      color: "#9DA7BB",
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
                      marginLeft:'40px',
                      textDecoration: "none",
                      fontSize: "22px",
                      color: "#9DA7BB",
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
                      marginLeft:'40px',
                      textDecoration: "none",
                      fontSize: "22px",
                      color: "#9DA7BB",
                    }}
                    activeStyle={{ color: "#010101" }}
                    to="/marketing"
                  >
                    Back-End
                  </NavLink>
                </Nav.Link>
                <Nav.Link href="#action1">
                  <NavLink
                    style={{
                      marginLeft:'40px',
                      textDecoration: "none",
                      fontSize: "22px",
                      color: "#9DA7BB",
                    }}
                    activeStyle={{ color: "#010101" }}
                    to="/biznes"
                  >
                    Front-End
                  </NavLink>
                </Nav.Link>
           
               
                
              
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
