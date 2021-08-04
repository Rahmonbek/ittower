import React, { Component } from "react";
import {
  Col,
  Form,
  FormControl,
  InputGroup,
  Container,
  Row,
} from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";

import styles from "../css/Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

export default function Bosh1() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className={styles.HeaderMenu}>
      <div className={styles.ContainerMeHead}>
        <div className={styles.TextHeaderMenu}>
          <h1 className={styles.TextHeaderMenuH1}>
            Biz sizga Dasturlash <br />
            va boshqa <b style={{ color: "#FFD401" }}>Offline</b> va{" "}
            <b style={{ color: "#FFD401" }}>Online</b> kurslarni taklif etamiz.
          </h1>
          <p>
            Siz istalgan vaqtda har qanday mavzuda{" "}
            <b style={{ color: "#FFD401" }}>Offline</b> va{" "}
            <b style={{ color: "#FFD401" }}>Online</b> kurslarni o’rganishingiz
            mumkin.
          </p>
        </div>
        <div className={styles.CardMeHeader}>
          <div className={styles.CircleYellow}>
            <div id={styles.IdCardFirst}>
              {/* First Cardme  Dasturlash */}

              <div className={styles.CardMe1}>
                <p
                  style={{
                    display: "flex", 
                    width: "100%",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                    marginTop: "20px",
                  }}
                >
                  <p
                    style={{ backgroundColor: "#272948" }}
                    className={styles.MarketingMeButton}
                  >
                    Back-End
                  </p>
                  <p style={{ display: "flex", marginRight: "30px" }}>
                    <p style={{ fontWeight: "600" }}>500.000</p>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#9DA7BB",
                        marginTop: "5px",
                      }}
                    >
                      UZS
                    </p>
                  </p>
                </p>
                <p className={styles.CardTextMeTime}>
                  <p>
                    Python yadrosi, Python
                    <br /> Django, API{" "}
                    <b style={{ fontSize: "14px", color: "#9DA7BB" }}>
                      | 48 soat
                    </b>
                  </p>
                </p>
                <p className={styles.StaringGroupME}>
                  <div className={classes.root}>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                    />
                    {value !== null && (
                      <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                  </div>
                  <div className={styles.NextTime}>
                    <i>
                      <BsArrowRightShort />
                    </i>
                  </div>
                </p>
              </div>

              {/* Second Cardme Frond-End */}

              <div id={styles.CardMeFrondEnd} className={styles.CardMe2}>
                <p
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                    marginTop: "20px",
                  }}
                >
                  <p
                    style={{ backgroundColor: "#37375F" }}
                    className={styles.MarketingMeButton}
                  >
                    Frond-End
                  </p>
                  <p style={{ display: "flex", marginRight: "30px" }}>
                    <p style={{ fontWeight: "600" }}>500.000</p>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#9DA7BB",
                        marginTop: "5px",
                      }}
                    >
                      UZS
                    </p>
                  </p>
                </p>
                <p className={styles.CardTextMeTime}>
                  <p>
                    HTML, CSS Bootstrap , JavaScript
                    <br /> Jquery Ajax,{" "}
                    <b style={{ fontSize: "14px", color: "#9DA7BB" }}>
                      | 48 soat
                    </b>
                  </p>
                </p>
                <p className={styles.StaringGroupME}>
                  <div className={classes.root}>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                    />
                    {value !== null && (
                      <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                  </div>
                  <div className={styles.NextTime}>
                    <i>
                      <BsArrowRightShort />
                    </i>
                  </div>
                </p>
              </div>
            </div>

            <div className={styles.CardThirdFour}>
              {/* Third CardMe  Back-End*/}

              <div className={styles.CardMe3}>
                <p
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                    marginTop: "20px",
                  }}
                >
                  <p
                    style={{ backgroundColor: "#10C8A0" }}
                    className={styles.MarketingMeButton}
                  >
                    Dasturlash
                  </p>
                  <p style={{ display: "flex", marginRight: "30px" }}>
                    <p style={{ fontWeight: "600" }}>500.000</p>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#9DA7BB",
                        marginTop: "5px",
                      }}
                    >
                      UZS
                    </p>
                  </p>
                </p>
                <p className={styles.CardTextMeTime}>
                  <p>
                    Frond-End va Back-End bo'yicha <br /> to'liq kurs{" "}
                    <b style={{ fontSize: "14px", color: "#9DA7BB" }}>
                      | 48 soat
                    </b>
                  </p>
                </p>
                <p className={styles.StaringGroupME}>
                  <div className={classes.root}>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                    />
                    {value !== null && (
                      <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                  </div>
                  <div className={styles.NextTime}>
                    <i>
                      <BsArrowRightShort />
                    </i>
                  </div>
                </p>
              </div>

              {/* Fourth CardMe Marketing */}

              <div style={{ marginLeft: "20px" }} className={styles.CardMe4}>
                <p
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    marginLeft: "10px",
                    marginTop: "20px",
                  }}
                >
                  <p className={styles.MarketingMeButton}>Marketing</p>
                  <p style={{ display: "flex", marginRight: "30px" }}>
                    <p style={{ fontWeight: "600" }}>500.000</p>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#9DA7BB",
                        marginTop: "5px",
                      }}
                    >
                      UZS
                    </p>
                  </p>
                </p>
                <p className={styles.CardTextMeTime}>
                  <p>
                    Raqamli marketing bo'yicha <br /> to'liq kurs{" "}
                    <b style={{ fontSize: "14px", color: "#9DA7BB" }}>
                      | 48 soat
                    </b>
                  </p>
                </p>
                <p className={styles.StaringGroupME}>
                  <div className={classes.root}>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                    />
                    {value !== null && (
                      <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                  </div>
                  <div className={styles.NextTime}>
                    <i>
                      <BsArrowRightShort />
                    </i>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
