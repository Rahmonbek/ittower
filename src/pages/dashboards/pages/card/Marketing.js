import React, { Component } from 'react'
import images5 from '../../img/cpes1.jpeg'
import { Card, Container, Row,Col } from 'react-bootstrap'
import stayle1 from '../../css/Navbar3.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import images1 from '../../img/cpes2.jpeg'
import ReactStars from "react-rating-stars-component";

export default class Dizayn extends Component {
    render() {
        const ratingChanged = (newRating) => {
            console.log(newRating);
          };  
        return (
            <div>      <div style={{width:'100%', left:'0px',height:'auto' }}>            

            <Container>
                <Row lg={3} md={1} xs={1}>
                    <Col> <Card style={{height:'430px'}}>
              <Card.Img variant="top" style={{height:'195px'}} src={images1} />
              <Card.Body>
                <Card.Title className={stayle1.name1}>  Python bo’yicha to’liq 
            kurs. (amaliy)</Card.Title>
                <Card.Text>
            <div style={{display:'flex'}} className={stayle1.star1}>
            <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
    <span style={{paddingTop:'8px'}}>  4.1  (564) </span>
                <div className={stayle1.card12}  style={{background:' #272948'}} >Back-End</div>
                
                <div style={{display:'flex',position:'absolute', bottom:'24px',left:'40px',right:'24px'}}> 
<div style={{paddingLeft:'20px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs hajmi</div>
<div  style={{fontSize:'18px'}}>42 soat</div>
</div>
<div style={{textAlign:'center',paddingLeft:'60px',paddingRight:'60px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs narxi</div>
<div  style={{fontSize:'18px',}}>500.000<span style={{paddingLeft:'5px',fontSize:'18px', opacity:'0.7'}}>uzs</span></div>
</div>
</div></div>
                </Card.Text>
                
              </Card.Body>
            </Card></Col>
            <Col> <Card style={{height:'430px'}} >
              <Card.Img variant="top" src={images5} style={{height:'195px'}}  />
              <Card.Body>
                <Card.Title className={stayle1.name1}>  Java, Spring bo’yicha to’liq 
            kurs. (amaliy)</Card.Title>
                <Card.Text>
                <div style={{display:'flex'}} className={stayle1.star1}>
            <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
    <span style={{paddingTop:'8px'}}>  4.1  (564) </span>
                <div className={stayle1.card12} style={{background:' #272948'}}> Back-End</div>
               
                <div style={{display:'flex',position:'absolute', bottom:'24px',left:'40px',right:'24px'}}> 
<div style={{paddingLeft:'20px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs hajmi</div>
<div  style={{fontSize:'18px'}}>42 soat</div>
</div>
<div style={{textAlign:'center',paddingLeft:'60px',paddingRight:'60px'}}>
<div style={{fontSize:'14px', opacity:'0.7'}}>Kurs narxi</div>
<div  style={{fontSize:'18px',}}>500.000<span style={{paddingLeft:'5px',fontSize:'18px', opacity:'0.7'}}>uzs</span></div>
</div>
<div>

    </div></div></div>
                </Card.Text>
                
              </Card.Body>
            </Card></Col>
                </Row>
            </Container></div> 
               
            </div>
        )
    }
}
