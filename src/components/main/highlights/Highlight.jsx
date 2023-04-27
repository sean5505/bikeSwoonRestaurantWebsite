import React from 'react'
import style from "./Highlights.module.css"
import FramerMotion from '../../../FramerMotion'

export default function Highlight(props) {
  return (
    <FramerMotion>
    <div className={style.item}>
      <img src={props.highlight.img} alt="" />
    <div className={style.itemHead}>
      <h4>{props.highlight.name} </h4>
      <h4 className ={style.price}> {props.highlight.price}</h4>
    </div>
    <div className={style.itemDescription}>
      <p>{props.highlight.desc}</p>
    </div>
    <h4 className={style.orderNow}>Order for Delivery</h4>
    
</div>
</FramerMotion>
  )
}
