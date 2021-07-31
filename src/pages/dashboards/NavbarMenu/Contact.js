import React from 'react'
import Menyu from '../pages/Bosh' 
import { Button, Card, Col, Row } from 'react-bootstrap';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Map ,Placemark,YMaps} from 'react-yandex-maps';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram'; 
import Footer from '../pages/Footer';
import style from '../css/Navbar5.module.css'

export default function Contact() {
    return (
        <div>
           <Menyu />        
        <Card className={style.mobil} style={{ width: '85%',textAlign:'center',margin:'auto',marginTop:'10px' }}>
        
        <YMaps >
  <Map style={{width:'100%',height:'30vw'}} defaultState={{ center: [41.263795, 69.225990], zoom: 12}} >
  <Placemark geometry={[41.263795, 69.225990]} />

</Map>
</YMaps>

  <Card.Body>
    <Card.Title style={{textAlign: 'center',paddingTop:'50px',width:'100%',fontFamily: 'SF Pro Display',fontSize: '30px',color: '#2E2E2E'}}>Biz bilan bog`lanish</Card.Title>
    <Card.Text>
     <Row >
<Col>
<div style={{fontSize:'23px'}}><PhoneIcon style={{paddingRight:'10px',width:'40px',height:'40px'}}    />+998 99 934-97-07</div>
<div  style={{fontSize:'23px'}}><PhoneIcon style={{paddingRight:'10px',width:'40px',height:'40px'}}  />+998 95 007-06-50</div>
</Col>
<Col>
<div  style={{fontSize:'23px'}}><TelegramIcon style={{paddingRight:'10px',width:'40px',height:'40px',}}  /><a style={{textDecoration:'none'}} href="https://t.me/IT_tower">@IT_tower</a></div>
<div  style={{fontSize:'23px'}}><InstagramIcon style={{paddingRight:'10px',width:'40px',height:'40px'}} /><a href="https://www.instagram.com/it_tower_academy/">@it_tower_academy</a></div>
</Col>




     </Row>    <h2 style={{paddingTop:'50px'}}>Manzil: Toshkent shahar Yashnabot tuman zulfiyaxonim kocha 5-uy</h2>
    </Card.Text>

  </Card.Body>
</Card>  

<Footer/>
        </div>
    )
}
