import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import stayle1 from "../../css/Navbar3.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import images3 from "../../img/image3.png";
import images4 from "../../img/image4.png";
import img from '../../img/graphic.jpg'

import ReactStars from "react-rating-stars-component";

export default class Biznes extends Component {
  render() {
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    return (
      <div>
      

        <Container>
          <div className={stayle1.CardOutMeDesign}>
           

            {/* Second Card */}

            <Card className={stayle1.CardMe}>
              <Card.Img variant="top" src={images4}/>
              <Card.Body>
                <Card.Text>
                  <b className={stayle1.CourseThemeText}>
                 Flutter,Android
                  </b>
                </Card.Text>
                <p className={stayle1.JavaPragram}>Mobil design</p>

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
            <Card className={stayle1.CardMe}>
              <Card.Img variant="top" src={images3}/>
              <Card.Body>
                <Card.Text>
                  <b className={stayle1.CourseThemeText}>
                  Illustrator boshlang’ichdan proffessionalgacha to'liq kafolat beramiz  
                  </b>
                </Card.Text>
                <p className={stayle1.JavaPragram}>Professonal </p>

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

            <Card className={stayle1.CardMe}>
              <Card.Img variant="top" src={img}/>
              <Card.Body>
                <Card.Text>
                  <b className={stayle1.CourseThemeText}>
                  Figma, Html, Css, Material-UI, UI/UX Design 
                  </b>
                </Card.Text>
                <p className={stayle1.JavaPragram}>Web Design</p>

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
}
