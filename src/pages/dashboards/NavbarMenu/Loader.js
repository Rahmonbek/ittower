import React, { Component } from 'react'
import style from '../css/Loader.module.css'
export default class Loader extends Component {
  render() {
    return (
      <div >
<div className={style.loader} >Loading...</div>
      </div>
    )
  }
}
