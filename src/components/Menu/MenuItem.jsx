import React from "react";
import style from "./MenuContainer.module.css";

export default function MenuItem(props) {
  return (
    <>
        <li className={style.menuItem}>
          <img className={style.itemImg} src={props.item.img} />
          <span className={style.itemName}>{props.item.name}</span>
          <span className={style.itemPrice}>${props.item.price}</span>
          <button
            className={style.addButton}
            onClick={() => props.updateCart(props.item)}
          >
            Add to Cart
          </button>
        </li>
    </>
  );
}
