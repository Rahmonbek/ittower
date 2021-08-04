import React, { Component } from "react";
import { Card,  Container, Row, Col } from "react-bootstrap";
import stayle1 from "../css/Navbar1.module.css";
import images1 from "../img/image1.png";
import images2 from "../img/image2.png";

import ReactStars from "react-rating-stars-component";
import BackEndME from "../img/backme.jpg";
import FrondME from "../img/frondme.jpg";
import fullstack from "../img/fullstack1.jpg";

export default class Bosh2 extends Component {
  render() {
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    return (
      <div>
        <div className={stayle1.sarlavha}>
          Bizning eng top kurslarimizni ko'rib chiqing
        </div>
        <Container fluid="md">
          <Row lg={2} md={1} xs={1} style={{ paddingTop: "60px" }}>
            <Col style={{ paddingBottom: "30px" }}>
              <Card className={stayle1.card1}>
                <Card.Img
                  style={{ height: "188px" }}
                  variant="top"
                  src={images1}
                />
                <Card.Body>
                  <Card.Title className={stayle1.name1}>
                    {" "}
                    <b style={{ marginLeft: "-18px" }}>
                      {" "}
                      Java Course, JavaOOp, JavaFx, Java Spring Development,
                      Database Development
                    </b>
                  </Card.Title>
                  <Card.Text>
                    <div
                      className={stayle1.star1}
                      style={{ display: "flex", marginLeft: "-28px" }}
                    >
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <span style={{ paddingTop: "8px" }}> 4.1 (564) </span>
                    </div>
                    <div className={stayle1.card12}>Java</div>

                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer className={stayle1.CardFooterMe}>
                      <div className={stayle1.CardPriceTimeSmall}>
                        <div>
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs hajmi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>42 soat</b>
                          </div>
                        </div>
                        <div
                          style={{ textAlign: "center", paddingLeft: "60px" }}
                        >
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs narxi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>500.000</b>
                            <span
                              style={{
                                paddingLeft: "5px",
                                fontSize: "18px",
                                opacity: "0.7",
                              }}
                            >
                              uzs
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card.Footer>
              </Card>
            </Col>

            <Col style={{ paddingBottom: "30px" }}>
              <Card className={stayle1.card2}>
                <Card.Img
                  variant="top"
                  style={{ height: "188px" }}
                  src={images2}
                />
                <div className={stayle1.card13}>Dizayn</div>
                <Card.Body>
                  <Card.Title className={stayle1.name2}>
                    <b style={{ marginLeft: "-18px" }}>
                      {" "}
                      Illustrator boshlang’ichdan proffessionalgacha to'liq
                      kafolat beramiz
                    </b>
                  </Card.Title>
                  <Card.Text>
                    <div className={stayle1.star2} style={{ display: "flex" }}>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <span style={{ paddingTop: "8px" }}> 4.1 (564) </span>
                    </div>

                  
                  </Card.Text>
                </Card.Body>
                <Card.Footer className={stayle1.CardFooterMe}>
                      <div className={stayle1.CardPriceTimeSmall}>
                        <div>
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs hajmi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>42 soat</b>
                          </div>
                        </div>
                        <div
                          style={{ textAlign: "center", paddingLeft: "60px" }}
                        >
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs narxi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>500.000</b>
                            <span
                              style={{
                                paddingLeft: "5px",
                                fontSize: "18px",
                                opacity: "0.7",
                              }}
                            >
                              uzs
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row lg={3} md={2} xs={1}>
            <Col style={{ paddingBottom: "30px" }}>
              <div className={stayle1.ycard1}>
                <Card style={{ height: "450px" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "250px" }}
                    src={BackEndME}
                  />
                  <Card.Body>
                    <Card.Title className={stayle1.title1}>
                      <b>
                        Python yadrosi, Python Telegram boti, Django, API, Git /
                        Github
                      </b>
                    </Card.Title>
                    <Card.Text>
                      <div
                        className={stayle1.star2}
                        style={{ display: "flex" }}
                      >
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <span style={{ paddingTop: "8px" }}> 4.1 (564) </span>
                      </div>
                      <div
                        style={{ backgroundColor: "#2E406C" }}
                        className={stayle1.card12}
                      >
                        Back-End
                      </div>
                      
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className={stayle1.CardFooterMe}>
                      <div className={stayle1.CardPriceTimeSmall}>
                        <div>
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs hajmi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>42 soat</b>
                          </div>
                        </div>
                        <div
                          style={{ textAlign: "center", paddingLeft: "60px" }}
                        >
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs narxi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>500.000</b>
                            <span
                              style={{
                                paddingLeft: "5px",
                                fontSize: "18px",
                                opacity: "0.7",
                              }}
                            >
                              uzs
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card.Footer>
                </Card>
              </div>
            </Col>
            <Col style={{ paddingBottom: "30px" }}>
              <div className={stayle1.ycard1}>
                <Card style={{ height: "450px" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "250px" }}
                    src={FrondME}
                  />
                  <Card.Body>
                    <Card.Title className={stayle1.title1}>
                      <b className={stayle1.CardTextFrond}>
                        HTML, CSS , JavaScript, React , Native , Hook Material
                        UI, Redux API
                      </b>
                    </Card.Title>
                    <Card.Text>
                      <div
                        className={stayle1.star2}
                        style={{ display: "flex" }}
                      >
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <span style={{ paddingTop: "8px" }}> 4.1 (564) </span>
                      </div>
                      <div
                        style={{ backgroundColor: "#2E406C" }}
                        className={stayle1.card12}
                      >
                        Frond-End
                      </div>
                      
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className={stayle1.CardFooterMe}>
                      <div className={stayle1.CardPriceTimeSmall}>
                        <div>
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs hajmi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>42 soat</b>
                          </div>
                        </div>
                        <div
                          style={{ textAlign: "center", paddingLeft: "60px" }}
                        >
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs narxi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>500.000</b>
                            <span
                              style={{
                                paddingLeft: "5px",
                                fontSize: "18px",
                                opacity: "0.7",
                              }}
                            >
                              uzs
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card.Footer>
                </Card>
              </div>
            </Col>
            <Col style={{ paddingBottom: "30px" }}>
              <div className={stayle1.ycard1}>
                <Card style={{ height: "450px" }}>
                  <Card.Img
                    variant="top"
                    style={{ height: "250px" }}
                    src={fullstack}
                  />
                  <Card.Body>
                    <Card.Title className={stayle1.title1}>
                      <b>
                        Python yadrosi, Python Telegram boti, Django, API, Git /
                        Github
                      </b>
                    </Card.Title>
                    <Card.Text>
                      <div
                        className={stayle1.star2}
                        style={{ display: "flex" }}
                      >
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <span style={{ paddingTop: "8px" }}> 4.1 (564) </span>
                      </div>
                      <div
                        style={{ backgroundColor: "#2E406C" }}
                        className={stayle1.card12}
                      >
                        Full-Stack
                      </div>
                    </Card.Text>
                   
                  </Card.Body>
                  <Card.Footer className={stayle1.CardFooterMe}>
                      <div className={stayle1.CardPriceTimeSmall}>
                        <div>
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs hajmi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>42 soat</b>
                          </div>
                        </div>
                        <div
                          style={{ textAlign: "center", paddingLeft: "60px" }}
                        >
                          <div style={{ fontSize: "14px", opacity: "0.7" }}>
                            Kurs narxi
                          </div>
                          <div style={{ fontSize: "18px" }}>
                            <b>500.000</b>
                            <span
                              style={{
                                paddingLeft: "5px",
                                fontSize: "18px",
                                opacity: "0.7",
                              }}
                            >
                              uzs
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card.Footer>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
