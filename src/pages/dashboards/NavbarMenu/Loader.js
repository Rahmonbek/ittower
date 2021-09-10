import React, { Component } from 'react'
import style from '../css/Loader.module.css'
export default class Loader extends Component {
  render() {
    return (<div className={style.body}>
      <div style={{display:'block'}}>
<div className={style.loader}>
  <span >IT - Tower</span>
</div>

      <div className={style.kuting}>Iltimos kuting...</div></div>
      </div>
    )
  }
}
