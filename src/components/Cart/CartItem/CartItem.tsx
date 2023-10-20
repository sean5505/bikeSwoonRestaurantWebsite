import { useEffect, useState } from "react";
import style from "./CartItem.module.css";
import { RemoveShoppingCart } from "@mui/icons-material";
import { useAppDispatch } from "../../../app/hooks";

import {
  deleteFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
} from "../../../features/cart/cartSlice";
import { MenuItems } from "../../../types/types";

type Props = {
  item: MenuItems;
  key: number;
  updateTotal: CallableFunction;
};

export default function CartItem(props: Props) {
  const [count, setCount] = useState(props.item.quantity);
  const [itemPrice, setItemPrice] = useState<number>(
    parseFloat(props.item.price)
  );
  const dispatch = useAppDispatch();

  function updateItemPrice() {
    if (props.item.quantity) {
      setCount(props.item.quantity);
      const subTotal =
        Math.round(parseFloat(props.item.price) * props.item.quantity * 100) /
          100 || 0;
      setItemPrice(subTotal); 
      props.updateTotal();
    }
  }
  useEffect(() => {
    updateItemPrice();
  }, [props.item]);

  return (
    <>
      
        <tr className={style.cartItem}>
          <td>
            <img
              className={style.cartItemImg}
              src={props.item.img}
              alt={props.item.name}
            />
          </td>
          <td className={style.cartItemName}> {props.item.name}</td>
          <td className={style.price}>${props.item.price} </td>

          <td className={style.itemCount}>
            <button onClick={() => dispatch(decrementItemQuantity(props.item))}>
              {" "}
              -{" "}
            </button>
            {count}
            <button onClick={() => dispatch(incrementItemQuantity(props.item))}>
              {" "}
              +
            </button>
          </td>
          <td className={style.price}>${itemPrice.toFixed(2)}</td>
          <td className={style.removeFromCart}>
            <RemoveShoppingCart
              onClick={() => dispatch(deleteFromCart(props.item))}
            />
          </td>
        </tr>
     
    </>
  );
}
