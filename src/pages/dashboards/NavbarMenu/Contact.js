import React from 'react'
import Menyu from '../pages/Bosh' 
import { Button, Card, Col, Row } from 'react-bootstrap';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Map ,Placemark,YMaps} from 'react-yandex-maps';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram'; 
import Footer from '../pages/Footer';

export default function Contact() {
    return (
        <div>
           <Menyu />        
        <Card style={{ width: '70%',textAlign:'center',margin:'auto',marginTop:'100px' }}>
        
        <YMaps >
  <Map style={{width:'100%',height:'500px'}} defaultState={{ center: [41.263795, 69.225990], zoom: 12}} >
  <Placemark geometry={[41.263795, 69.225990]} />

</Map>
</YMaps>

  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     <Row>
<Col>
<div style={{fontSize:'23px'}}><PhoneIcon style={{paddingRight:'10px',width:'40px',height:'40px'}}    />+998 99 934-97-07</div>
<div  style={{fontSize:'23px'}}><PhoneIcon style={{paddingRight:'10px',width:'40px',height:'40px'}}  />+998 95 007-06-50</div>
</Col>
<Col>
<div  style={{fontSize:'23px'}}><InstagramIcon style={{paddingRight:'10px',width:'40px',height:'40px'}}  />@IT_tower</div>
<div  style={{fontSize:'23px'}}
> <TelegramIcon style={{paddingRight:'10px',width:'40px',height:'40px'}} />@it_tower_academy</div>
</Col>




     </Row>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>  

<Footer/>
        </div>
    )
}
