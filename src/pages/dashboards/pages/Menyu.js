import React, { Component } from 'react'
import Bosh from './Bosh'
import Bosh1 from './Bosh1'
import Bosh2 from './Bosh2'
import Footer from './Footer'
import Bosh4 from './card/About'
import Bosh5 from './Bosh5'
import Bosh6 from './Bosh6'
import styles from './css/Menyu.module.css'

export default class Menyu extends Component {
  render() {
    return (
      <div> 
        <Bosh />
        <Bosh1 />
        <Bosh2 />
        <Bosh4 />
        <Bosh5 />
        <Bosh6 />
        <Footer />
            </div>
    )
  }
}

