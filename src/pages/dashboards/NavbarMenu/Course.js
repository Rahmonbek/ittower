import React from "react";
import styles from "../css/Course.module.css";
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import Head1 from "../img/Head.jpg";
import Head3 from "../img/brand1.jpg";
import Card1 from "../img/Card1.jpg";
import Card2 from "../img/Card2.jpg";
import LaptopMacOutlinedIcon from "@material-ui/icons/LaptopMacOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { FaUniversity } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { BsChevronRight } from "react-icons/bs";
import Sertif from "../img/sertificate.jpg";
import Staj from "../img/worked.jpg";
import Result from "../img/result.png";
import Win from "../img/winners.gif";
import Footer from "../pages/Footer";

export default function Course() {
  return (
    <div className={styles.HeaderMenu}>
     
        <div className={styles.BodyMenu}>
          <div className={styles.CoureselImg}>
            <p className={styles.TextMeGroup}>
              <h1
                style={{ textTransform: "uppercase" }}
                className={styles.TextMe}
              >
                DASTURLASHNI{" "}
                
                  QULAY <span style={{ color: "#00B533" }}>MUHITDA</span>{" "}
                
                O‘RGANING
              </h1>
              {/* <p className={styles.TextMeSmall}>
                It-Tower sizga ishonchli va sifatli ta'limni kafolatlaydi.
              </p> */}
              <p className={styles.TextMeSmall}>
                It-Tower sizga ishonchli va sifatli
                <b style={{ color: "#00B533" }}> Offline </b> va{" "}
                <b style={{ color: "#00B533" }}> Online </b> kurslarni taklif
                etadi.
              </p>
            </p>
            <p className={styles.ImgMeHead}>
              <img className={styles.Rasm1} src={Head1} />
              <img class="img-fluid" className={styles.Rasm} src={Head3} />
            </p>
          </div>
          <Container>
          <div className={styles.CardGroupHead}>
            <div className={styles.CardGroupBody}>
              <Card className={styles.CardMe}>
                <Card.Img variant="top" src={Card1} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "30px" }}>
                    <i
                      style={{
                        color: "green",
                        fontSize: "40px",
                        marginRight: "10px",
                      }}
                    >
                      <LaptopMacOutlinedIcon />
                    </i>
                    Frond-End
                  </Card.Title>
                  <Card.Text className={styles.CardText}>
                    HTML, CSS Bootstrap , Sass/Less JavaScript, Jquery Ajax,
                    React Reactstrapt, React Native Antd, React Hook Material
                    UI, Redux API, Git/Git Hub
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link
                    style={{ color: "#000000" }}
                    className={styles.CardFooter3}
                    href="#"
                  >
                    Ba'tafsil malumot uchun
                  </Card.Link>
                  <Card.Link
                    style={{ color: "#000000" }}
                    className={styles.CardFooter4}
                    href="https://goo.gl/maps/jvg8ZgWWd84KSGmSA"
                  >
                    <i style={{ color: "blue" }}>
                      <RoomOutlinedIcon />
                    </i>
                    Bizning Manzil
                  </Card.Link>
                </Card.Footer>
              </Card>
              <Card className={styles.CardMe}>
                <Card.Img variant="top" src={Card2} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "30px" }}>
                    <i
                      style={{
                        color: "green",
                        fontSize: "40px",
                        marginRight: "10px",
                      }}
                    >
                      <LaptopMacOutlinedIcon />
                    </i>
                    Back-End
                  </Card.Title>
                  <Card.Text className={styles.CardText}>
                    Python yadrosi, Python Telegram bot, Django, API, Git / Git
                    Hub
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Link
                    style={{ color: "#000000" }}
                    className={styles.CardFooter3}
                    href="#"
                  >
                    Ba'tafsil malumot uchun
                  </Card.Link>
                  <Card.Link
                    style={{ color: "#000000" }}
                    className={styles.CardFooter4}
                    href="https://goo.gl/maps/jvg8ZgWWd84KSGmSA"
                  >
                    <i style={{ color: "blue" }}>
                      <RoomOutlinedIcon />
                    </i>
                    Bizning Manzil
                  </Card.Link>
                </Card.Footer>
              </Card>
            </div>
            <div className={styles.CourseByType}>
              <div className={styles.OfflineCourseAbout}>
                <div className={styles.universitIconGroup}>
                  <i>
                    <FaUniversity />
                  </i>
                </div>
                <div
                  className={styles.OfflineCourseTitle}
                  style={{ width: "300px" }}
                >
                  <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                    Off-line
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontFamily: "Gill Sans, sans-serif",
                      color: "#C8C8C8",
                    }}
                  >
                    Ushbu Ta'lim shaklida siz bizning o'quv filiallarimizdan
                    birida o'zingizga qulay vaqtda ta'lim olishingiz mumkin
                  </p>
                  <p className={styles.Urlbatafsil}>
                    <p style={{ fontSize: "20px" }}>Batafsil</p>
                    <p>
                      {" "}
                      <i style={{ fontSize: "18px", marginLeft: "10px" }}>
                        <BsChevronRight />
                      </i>
                    </p>
                  </p>
                </div>
              </div>
              <div className={styles.OnlineCourseAbout}>
                <div className={styles.universitIconGroup}>
                  <i>
                    <FcHome />
                  </i>
                </div>
                <div
                  className={styles.OfflineCourseTitle}
                  style={{ width: "300px" }}
                >
                  <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                    On-line
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontFamily: "Gill Sans, sans-serif",
                      color: "#C8C8C8",
                    }}
                  >
                    Ushbu Ta'lim shaklida o'qish va ishdan ajralmagan holda
                    kunning istalgan vaqtida masofaviy ta'lim olishingiz mumkin
                  </p>
                  <p className={styles.Urlbatafsil}>
                    <p style={{ fontSize: "20px" }}>Batafsil</p>
                    <p>
                      {" "}
                      <i style={{ fontSize: "18px", marginLeft: "10px" }}>
                        <BsChevronRight />
                      </i>
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ArrivedFinish}>
              <div className={styles.ArrivedFinishSertificate}>
                <h1>Sertifikat bilan taqdirlash</h1>
                <p>
                  Kurs so'nggida talabaning o'zlashtirish ko'rsatkichlari
                  e'tiborga olingan holda eng yaxshi sertifikatlar beriladi.
                </p>
                <p
                  style={{ width: "100%", height: "300px" }}
                  className={styles.ThreeCardImgme}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    class="img-fluid"
                    src={Win}
                  />
                </p>
              </div>
              <div className={styles.ArrivedFinishSertificate}>
                <h1>Ish bilan ta'minlashda amaliy ko'mak</h1>
                <p>
                  Kurslarni muvaffaqiyatli tamomlagan talabalarga It-Tower
                  akademiyasi tomonidan ish bilan ta’minlashda amaliy yordam
                  ko’rsatiladi.
                </p>
                <p className={styles.ThreeCardImgme}>
                  <img class="img-fluid" src={Staj} />
                </p>
              </div>
              <div className={styles.ArrivedFinishSertificate}>
                <h1>Ishga kiring va karyerangizni boshlang</h1>
                <p>
                  Biz bilan orzu qilgan ish o'rningiz egasiga aylaning. Kursni
                  muvaffaqiyatli tamomlasangiz albatta ishga kirishingiz
                  kafolatlanadi.
                </p>
                <p className={styles.ThreeCardImgme}>
                  <img class="img-fluid" src={Result} />
                </p>
              </div>
            </div>
          </div>
          </Container>
        </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}
