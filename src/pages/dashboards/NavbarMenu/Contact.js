import React from "react";
import Menyu from "../pages/Bosh";
import { Card, Col, Container, Row } from "react-bootstrap";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import PhoneIcon from "@material-ui/icons/Phone";
import TelegramIcon from "@material-ui/icons/Telegram";
import Footer from "../pages/Footer";
import style from "../css/Navbar5.module.css";

export default function Contact() {
  return (
    <div>
      <Menyu />
      <Card
        className={style.mobil}
        style={{
          width: "85%",
          textAlign: "center",
          margin: "auto",
          marginTop: "10px",
        }}
      >
        <YMaps>
          <Map
            style={{ width: "100%", height: "40vw" }}
            defaultState={{ center: [41.263795, 69.22599], zoom: 12 }}
          >
            <Placemark geometry={[41.263795, 69.22599]} />
          </Map>
        </YMaps>

        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
              paddingTop: "50px",
              width: "100%",
              fontFamily: "SF Pro Display",
              fontSize: "30px",
              color: "#2E2E2E",
            }}
          >
            Biz bilan bog`lanish
          </Card.Title>
          <Card.Text>
<Container>
            <Row>
              <Col>
                <div className={style.disp} style={{width:'300px', display:'flex', fontSize: "23px", height:'40px'}}>
                  <PhoneIcon
                    style={{
                      paddingRight: "10px",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  +998 99 934-97-07
                </div>
                <div style={{ width:'300px', display:'flex', fontSize: "23px", height:'40px' }}>
                  <PhoneIcon
                    style={{
                      paddingRight: "10px",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  +998 95 007-06-50
                </div>
              </Col>
              <Col>
                <div style={{width:'300px', display:'flex', fontSize: "23px", height:'40px'  }}>
                  <TelegramIcon
                    style={{
                      paddingRight: "10px",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://t.me/IT_tower"
                  >
                    @IT_tower
                  </a>
                </div>
                <div style={{width:'300px', display:'flex', fontSize: "23px", height:'40px' }}>
                  <InstagramIcon
                    style={{
                      paddingRight: "10px",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  <a  href="https://www.instagram.com/it_tower_academy/">
                    @it_tower_academy
                  </a>
                </div>
              </Col>
            </Row></Container>
            <h2 style={{ paddingTop: "50px" }}>
              Manzil: Yakkasaroy Maxalla kometiteti 
            </h2>
          </Card.Text>
        </Card.Body>
      </Card>

      <Footer />
    </div>
  );
}
