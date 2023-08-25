import React, { useEffect, useState } from "react";
import style from "./Cart.module.css";
import { RemoveShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../features/cart/cartSlice";

export default function CartItem(props) {
  const [count, setCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(props.item.price);
  const dispatch = useDispatch();

  // for itemQuantity input
  const handleCountChange = (e) => {
    setCount(e.target.value);
  };

  //for the itemPrice considering the itemQuantity
  useEffect(() => {
    const newItemPrice = Number(Math.round(props.item.price * count * 100) / 100 || 0)
    setItemPrice(newItemPrice);
    props.updateTotal(newItemPrice)
  }, [count]);

  return (
    <li className={style.cartItem}>
      <img
        className={style.cartItemImg}
        src={props.item.img}
        alt={props.item.name}
      />
      <p className={style.cartItemPrice}>${itemPrice} </p>
      <div className={style.itemCount}>
        <input
          type="number"
          min="1"
          max="9"
          value={count}
          onChange={handleCountChange}
        />
      </div>
      <div className={style.removeFromCart}>
        <RemoveShoppingCart
          onClick={() => dispatch(deleteFromCart(props.item))}
        />
      </div>
    </li>
  );
}
