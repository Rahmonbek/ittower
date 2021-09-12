import React, { Component } from "react";
import styles from "../css/Footer.module.css";
import payme from "../img/payme.png";
import click from "../img/click.png";
import upay from "../img/upay.png";
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import { Container, Row, Col, Button } from "react-bootstrap";
import InstagramFilled, { InstagramOutlined } from  "@ant-design/icons"
import instagramm from '../img/instagramm.png' 
import { Instagram } from "@material-ui/icons";
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
                    >
                        <TelegramIcon id={styles.tSites} />
                    </a>
                    <a 
                      href="mailto:ittower01@gmail.com"
                      target="_blank"
                      style={{padding:'3px' }}
                    >
                      <MailIcon id={styles.mSites}  />
                    </a>
                    <a  
                      href="https://www.instagram.com/it_tower_academy/"
                
                      
                    ><InstagramOutlined id={styles.iSites} />
                     
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                    
                    >
                     <YouTubeIcon  id={styles.ySites} />
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
