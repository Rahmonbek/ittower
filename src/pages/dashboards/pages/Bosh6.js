import React, { Component } from 'react'
import stayle5 from '../css/Navbar5.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel,} from 'react-bootstrap';
import oq from '../img/oq.jpg'

export default class Bosh6 extends Component {
   
   
    render() {
        return (
            <div>
              <div className={stayle5.all} style={{  paddingBottom:'100px',margin:'auto',textAlign:'center',display:'block', alignItems:'center',}}>
           <div className={stayle5.titler} style={{textAlign:'center',fontSize:'2.7vw', alignItems:'center'}}>Biz haqimizda boshqalar fikri</div>     
            
            <div className={stayle5.cor} style={{textAlign:'center',margin:'auto'}}>
            

            <Carousel >

            <Carousel.Item>

<img

    className="d-block w-100"

    src={oq}

    alt="Third slide"

/>



<Carousel.Caption>

    <p style={{color:'black',textAlign:'center',fontSize:'18px'}}>Tahir</p>
    <p style={{color: '#536DFD',textAlign:'center',fontSize:'18px'}}>Senior Designer</p>

    <p style={{color:'black',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>

</Carousel.Caption>

</Carousel.Item>
                <Carousel.Item>

<img

    className="d-block w-100"

    src={oq}

    alt="Third slide"

/>



<Carousel.Caption>

    <p style={{color:'black',textAlign:'center',fontSize:'18px'}}>Tahir</p>
    <p style={{color: '#536DFD',textAlign:'center',fontSize:'18px'}}>Senior Designer</p>

    <p style={{color:'black',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>

</Carousel.Caption>

</Carousel.Item>


                <Carousel.Item>

                <img

                    className="d-block w-100"

                    src={oq}

                    alt="Third slide"

                />

            

                <Carousel.Caption>

                    <p style={{color:'black',textAlign:'center',fontSize:'18px'}}>Ted Howard</p>
                    <p style={{color: '#536DFD',textAlign:'center',fontSize:'18px'}}>Senior Designer</p>

                    <p style={{color:'black',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>

                </Carousel.Caption>

                </Carousel.Item>

            </Carousel>



</div>

  
       
        
      
            </div></div>
        )
    }
}