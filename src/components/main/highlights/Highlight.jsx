import React from 'react'

export default function Highlight(props) {
  return (
    <div className="item">
    <img src={props.highlight.img} alt="" />
    <div className="itemHead">
    <h4>{props.highlight.name} </h4>
    <h4 id='price'> {props.highlight.price}</h4>
    </div>
    <div className="itemDescription">
    <p>{props.highlight.desc}</p>
    </div>
    <h4 className='orderNow'>Order for Delivery</h4>
    
</div>
  )
}
