import React, { Component } from "react";
import styles from "../css/Footer.module.css";
import payme from "../img/payme.png";
import click from "../img/click.png";
import cx from "classnames";
import upay from "../img/upay.png";
import telegram from "../img/telegram.png";
import email from "../img/amail.jpeg";
import instagram from "../img/instagram.jpeg";
import youtube from "../img/youtobe.jpeg";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Router } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className={styles.footer_top}></div>
        
        <div className={styles.headers}>
          <Container>
            <Row className={styles.navbar}>
              <Col>
                <ul className={styles.ulGroup}>
                  <li>
                    <li>
                      <br />
                    </li>
                    <h4>Asosiy</h4>
                  </li>
                  <li>
                    <br />
                  </li>
                  <li>Loyiha haqida</li>
                  <li>Kurslar</li>
                  <li>Mentorlarga</li>
                  <li>Ommoviy oferta</li>
                  <li>Maxfiylik siyosati</li>

                  <div className={styles.iconSites}>
                    <a
                      href="https://t.me/IT_tower"
                      target="_blank"
                      style={{ color: "#FFFFFF", backgroundColor: "#259CD8" }}
                    >
                      <i class="fab fa-telegram-plane"></i>
                    </a>
                    <a
                      href="ittower01@gmail.com"
                      target="_blank"
                      
                    >
                      <i id={styles.fSites} class="far fa-envelope"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/it_tower_academy/"
                      className={styles.instagramIcon}
                    >
                      <i id={styles.iSites} class="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      style={{ color: "#FE0000", backgroundColor: "#FFFFFF" }}
                    >
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>
                </ul>
              </Col>
              <Col>
                <ul className={styles.ulGroup}>
                  <li>
                    <li>
                      <br />
                    </li>
                    <h4>Qo'shimcha</h4>
                  </li>
                  <li>
                    <br />
                  </li>
                  <li>Bizning jamoa</li>
                  <li>Biz bilan hamkorlik</li>
                  <li>Bu qanday ishlaydi ?</li>
                </ul>
              </Col>
              <Col>
                <ul className={styles.ulGroup}>
                  <li>
                    <li>
                      <br />
                    </li>
                    <h4>Qo'llab quvvatlash</h4>
                  </li>
                  <li>
                    <br />
                  </li>
                  <li>Eng ko'p beriladigan savollar</li>
                  <li>Kontakt</li>
                </ul>
              </Col>
              <Col>
                <ul className={styles.ulGroup}>
                  <li>
                    <li>
                      <br />
                    </li>
                    <h4>To'lov turlari</h4>
                  </li>
                  <li>
                    <br />
                  </li>
                  <li>
                    <div className={styles.payGroup}>
                      <a href="https://payme.uz/home/main">
                        <img src={payme} />
                      </a>
                      <a href="https://click.uz/uz">
                        <img src={click} />
                      </a>
                      <a href="https://upay.uz/">
                        <img src={upay} />
                      </a>
                    </div>
                  </li>
                  <div className={styles.manzil}>
                    <p>
                      100011, Toshkent sh. Shayxontohur tum.,
                      <br /> Zarqaynar ko'ch., 3B-uy
                    </p>
                    <Button type="button">
                      <a href="https://pdp.uz/">Biz bilan aloqa</a>
                    </Button>
                  </div>
                </ul>
              </Col>

              <div className={styles.footerText}>
                <p>
                  © 2019 storm.uz | Personel Development Process LLC |
                  Foydalanish shartlari{" "}
                </p>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
