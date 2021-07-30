import React, { Component } from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import stayle from "../css/Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";

export default class Bosh1 extends Component {
  render() {
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    return (
      <div>
        <div id={stayle.all} expand="lg" className="mr-auto my-2 my-lg-0">
          <div className={stayle.elips}></div>
          <div style={{ width: "46%" }}>
            <div className={stayle.dastur}>
              <p style={{ fontWeight: "800", fontSize: "2.6vw" }}>
                Biz sizga{" "}
                <span
                  style={{
                    color: "#e9e50a",
                    fontWeight: "800",
                    fontSize: "2.6vw",
                  }}
                >
                  Dasturlash
                </span>
                <br /> va yo`nalishlardagi ofline va online kurslarimizga taklif
                qilamiz.
              </p>
              <span
                style={{ fontWeight: "800", fontSize: "2.6vw", width: "100%" }}
              ></span>
            </div>

            <div style={{ color: "white" }} className={stayle.dastur1}>
              Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz
              mumkin.
            </div>
          </div>

          <Row
            style={{ marginTop: "100px", width: "50%" }}
            xs={1}
            lg={2}
            md={1}
            sm={1}
          >
            <Col>
              <div className={stayle.card1}>
                <div className={stayle.card11}>Marketting</div>
                <div className={stayle.som1}>
                  500.000<span>UZS</span>
                </div>
                <div className={stayle.Sharx1}>
                  Raqamli marketing bo'yicha to'liq kurs<span>|48 soat</span>
                </div>
                <div style={{ display: "flex" }} className={stayle.star1}>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <div className={stayle.top1}>
                    4.1 <span>(560)</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className={stayle.card2}>
                <div className={stayle.card12}>Dasturlash</div>
                <div className={stayle.som2}>
                  500.000<span>UZS</span>
                </div>
                <div className={stayle.Sharx2}>
                  Java Spring bo’yicha to’liq kurs(amaliy)<span>|64 soat</span>
                </div>
                <div style={{ display: "flex" }} className={stayle.star1}>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <div className={stayle.top1}>
                    4.1 <span>(560)</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className={stayle.card3}>
                <div className={stayle.card13}>Dizayn</div>
                <div className={stayle.som3}>
                  500.000<span>UZS</span>
                </div>
                <div className={stayle.Sharx3}>
                  Illustrator 0 dan professionalgacha to’liq kurs)
                  <span>|72 soat</span>
                </div>
                <div style={{ display: "flex" }} className={stayle.star1}>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />

                  <div className={stayle.top1}>
                    4.1 <span>(560)</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
