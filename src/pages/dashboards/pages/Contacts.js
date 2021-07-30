import React, { Component } from 'react'
import Menyu from './Bosh' 
import { Button, Card, Col, Row } from 'react-bootstrap';

import InstagramIcon from '@material-ui/icons/Instagram';
import { Map ,Placemark,YMaps} from 'react-yandex-maps';
import PhoneIcon from '@material-ui/icons/Phone';
import Footer from './Footer';

export default class Contacts extends Component {
  render() {
    return (
      <div> 
        <Menyu />        
        <Card style={{ width: '70%',textAlign:'center',margin:'auto',marginTop:'100px' }}>
        
        <YMaps>
  <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} />
  <Placemark geometry={[55.684758, 37.738521]} />
</YMaps>

  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     <Row>
<Col>
<div><PhoneIcon style={{paddingRight:'10px'}}   />+998 99 934-97-07</div>
<div><PhoneIcon style={{paddingRight:'10px'}}  />+998 95 007-06-50</div>
</Col>
<Col>
<div><InstagramIcon style={{paddingRight:'10px'}}  />@IT_tower</div>
<div><i class="fa fa-paper-plane-o" aria-hidden="true" style={{paddingRight:'10px'}} ></i>@it_tower_academy</div>
</Col>




     </Row>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Footer />
      </div>
    )
  }
}



