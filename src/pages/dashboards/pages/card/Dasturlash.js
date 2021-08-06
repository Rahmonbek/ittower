import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import stayle1 from "../../css/Navbar3.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card1 from "../../img/CardD1.jpg";
import Card2 from "../../img/CardD2.jpg";
import Card3 from "../../img/CardD4.jpg";
import images2 from "../../img/cpes5.jpeg";
import ReactStars from "react-rating-stars-component";

export default function Dasturlash() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <Container>
        <div className={stayle1.CardOutMe}>
          <Card className={stayle1.CardMe}>
            <Card.Img variant="top" src={Card1} />
            <Card.Body>
              <Card.Text>
                <b className={stayle1.CourseThemeText}>
                 Frontend Dev, Java Dev, Database Dev, Spring Dev, 
                </b>
              </Card.Text>
              <p className={stayle1.JavaPragram}>Full-Stack</p>
              <div className={stayle1.star2} style={{ display: "flex" }}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <span style={{ paddingTop: "8px" }}> 4.1 (564) </span>
              </div>
            </Card.Body>
            <Card.Footer className={stayle1.CardFooterMe}>
              <div className={stayle1.CardPriceTimeSmall}>
                <div>
                  <div>Kurs hajmi</div>
                  <div>
                    <b>42 soat</b>
                  </div>
                </div>
                <div>
                  <div>Kurs narxi</div>
                  <div>
                    <b>500.000</b>
                    <span>uzs</span>
                  </div>
                </div>
              </div>
            </Card.Footer>
          </Card>

          {/* Second Card */}

          <Card className={stayle1.CardMe}>
            <Card.Img variant="top" src={Card2} />
            <Card.Body>
              <Card.Text>
                <b className={stayle1.CourseThemeText}>
                  Java, Java OOP, JavaFx, JavaSpring, Spring Bot
                </b>
              </Card.Text>
              <p  className={stayle1.JavaPragram}>Java</p>

              <div className={stayle1.star2} style={{ display: "flex" }}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <span style={{ paddingTop: "8px" }}> 4.1 (564) </span>
              </div>
            </Card.Body>
            <Card.Footer className={stayle1.CardFooterMe}>
              <div className={stayle1.CardPriceTimeSmall}>
                <div>
                  <div>Kurs hajmi</div>
                  <div>
                    <b>42 soat</b>
                  </div>
                </div>
                <div>
                  <div>Kurs narxi</div>
                  <div>
                    <b>500.000</b>
                    <span>uzs</span>
                  </div>
                </div>
              </div>
            </Card.Footer>
          </Card>

          {/* thirs Card */}

          <Card className={stayle1.CardMe}>
            <Card.Img variant="top" src={Card3} />
            <Card.Body>
              <Card.Text>
                <b className={stayle1.CourseThemeText}>
                RDBMS , PostgreSQL,SQL ,Postgres security , technics
                </b>
              </Card.Text>
              <p className={stayle1.JavaPragram}>Database</p>

              <div className={stayle1.star2} style={{ display: "flex" }}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <span style={{ paddingTop: "8px" }}> 4.1 (564) </span>
              </div>
            </Card.Body>
            <Card.Footer className={stayle1.CardFooterMe}>
              <div className={stayle1.CardPriceTimeSmall}>
                <div>
                  <div>Kurs hajmi</div>
                  <div>
                    <b>42 soat</b>
                  </div>
                </div>
                <div>
                  <div>Kurs narxi</div>
                  <div>
                    <b>500.000</b>
                    <span>uzs</span>
                  </div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </Container>
    </div>
  );
}
