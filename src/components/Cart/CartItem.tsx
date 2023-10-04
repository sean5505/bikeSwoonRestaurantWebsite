import { useEffect, useState } from "react";
import style from "./Cart.module.css";
import { RemoveShoppingCart } from "@mui/icons-material";
import { useAppDispatch } from "../../app/hooks";

import {
  deleteFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
} from "../../features/cart/cartSlice";
import { MenuItems } from "../../types/types";

type Props = {
  item: MenuItems;
  key: number;
  updateTotal: CallableFunction;

}

export default function CartItem(props : Props) {
  const [count, setCount] = useState(props.item.quantity);
  // const [itemPrice, setItemPrice] = useState(props.item.price);
  const dispatch = useAppDispatch();

  function updateItemPrice() {
    setCount(props.item.quantity);
    /* const newItemPrice = Number(
      Math.round(props.item.price * props.item.quantity * 100) / 100 || 0
    );
    setItemPrice(newItemPrice); <----- might re-add idk yet */
    props.updateTotal();
  }

  useEffect(() => {
    updateItemPrice();
  }, [props.item]);

  return (
    <li className={style.cartItem}>
      <img
        className={style.cartItemImg}
        src={props.item.img}
        alt={props.item.name}
      />
      <p className={style.cartItemName}>{props.item.name}</p>
      <p className={style.cartItemPrice}>${props.item.price} </p>

      <div className={style.itemCount}>
        <button onClick={() => dispatch(decrementItemQuantity(props.item))}>
          {" "}
          -{" "}
        </button>
        {count}
        <button onClick={() => dispatch(incrementItemQuantity(props.item))}>
          {" "}
          +
        </button>
      </div>
      <div className={style.removeFromCart}>
        <RemoveShoppingCart
          onClick={() => dispatch(deleteFromCart(props.item))}
        />
      </div>
    </li>
  );
}
