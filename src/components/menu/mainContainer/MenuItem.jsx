import React, { useEffect, useState } from 'react'
import style from './mainContainer.module.css';
import FramerMotion from '../../../FramerMotion';
import RightContainer from '../rightContainer/RightContainer';



export default function MenuItem(props) {

   // wanted to remove props.item.name so destructuring... 

/*had to lift the function up to the parent component as
this is a function being called x amount of times therefore
each time it is called the value, if iut were to change */
 
  
   
  return (
    <>
    <FramerMotion>
    <div className={style.menuItem}>
      <img className={style.itemImg} src={props.item.img} />
      <div className={style.itemName}>{props.item.name}</div>
      <div className={style.itemPrice}>${props.item.price}</div>
      <button className={style.addButton} onClick={() => props.updateCart(props.item)}>
      Add to Cart
      </button>
    </div>
    </FramerMotion>
    </>
  );
}


