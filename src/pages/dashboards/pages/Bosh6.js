import React, { Component } from "react";
import stayle5 from "../css/Navbar5.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import oq from "../img/oq.jpg";

export default class Bosh6 extends Component {
  render() {
    return (
      <div>
        <div
          className={stayle5.all}
          style={{
            overflowX:'hidden',
            paddingBottom: "100px",
            margin: "auto",
            textAlign: "center",
            display: "block",
            alignItems: "center",
          }}
        >
          <div className={stayle5.titler}>Biz haqimizda boshqalar fikri</div>

          <div
            className={stayle5.cor}
            style={{ textAlign: "center", margin: "auto" }}
          >
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={oq} alt="Third slide" />

                <Carousel.Caption>
                  <p
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    <b>Ismoilov Rahmonbek</b>
                  </p>
                  <p
                    style={{
                      color: "#536DFD",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    Senior Developer
                  </p>

                  <p style={{ color: "black", textAlign: "center" }}>
                    IT-Tower – qisqa vaqt ichida yuqori natijalarga erishgan,
                    O’zbekistondagi zamonaviy kasblarni o’rgatuvchi ilg’or
                    ta'lim markazi. Sizga eng kerakli zamonaviy kasb va
                    bilimlarni o’rgatadigan maskan. Bu yerda Web Dasturlash,
                    Frond-End, Back-End kabi
                    yo'nalishlarning birida o'qib, zamonaviy kasblarning
                    mutaxassisi bo’lishingiz mumkin.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={oq} alt="Third slide" />

                <Carousel.Caption>
                  <p
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    <b>Xayitov Murodilla</b>
                  </p>
                  <p
                    style={{
                      color: "#536DFD",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    Senior Developer
                  </p>

                  <p style={{ color: "black", textAlign: "center" }}>
                    IT-Tower – qisqa vaqt ichida yuqori natijalarga erishgan,
                    O’zbekistondagi zamonaviy kasblarni o’rgatuvchi ilg’or
                    ta'lim markazi. Sizga eng kerakli zamonaviy kasb va
                    bilimlarni o’rgatadigan maskan. Bu yerda Web Dasturlash,
                    Frond-End, Back-End kabi
                    yo'nalishlarning birida o'qib, zamonaviy kasblarning
                    mutaxassisi bo’lishingiz mumkin.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={oq} alt="Third slide" />

                <Carousel.Caption>
                  <p
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    Abbosbek
                  </p>
                  <p
                    style={{
                      color: "#536DFD",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    Senior Developer
                  </p>

                  <p style={{ color: "black", textAlign: "center" }}>
                    IT-Tower – qisqa vaqt ichida yuqori natijalarga erishgan,
                    O’zbekistondagi zamonaviy kasblarni o’rgatuvchi ilg’or
                    ta'lim markazi. Sizga eng kerakli zamonaviy kasb va
                    bilimlarni o’rgatadigan maskan. Bu yerda Web Dasturlash,
                    Frond-End,kabi
                    yo'nalishlarning birida o'qib, zamonaviy kasblarning
                    mutaxassisi bo’lishingiz mumkin.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
