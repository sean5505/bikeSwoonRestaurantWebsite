import { useEffect, useState } from "react";
import style from "./CartContainer.module.css";
import CartItem from "../CartItem/CartItem";
import { useAppSelector } from "../../../app/hooks";
import { MenuItems } from "../../../types/types";
import Coupon from "../Coupon/Coupon";
import OrderSummary from "../OrderSummary/OrderSummary";

export default function CartContainer() {
  const cart = useAppSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(cart.length);

  // will pass down to cartItem component for when there is an increment or decrement in an individals item price, this function will be called
  function updateTotal() {
    let price = 0;
    let quantity = 0;
    for (const item of cart) {
      price += item.price * item.quantity;
      quantity += item.quantity;
    }
    setTotalPrice(parseFloat(price.toFixed(2)));
    setTotalItems(quantity);
  }

  useEffect(() => {
    updateTotal();
  }, [cart]);

  return (
    <>
    <div className={style.container}>
      <table className={style.yourCart}>
        <thead className={style.tableHead}>
          <tr>
            <td>Image</td>
            <td>Product Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
        {cart.map((item: MenuItems) => (
          <CartItem key={item.id} item={item} updateTotal={updateTotal} />
        ))}
        </tbody>
      </table>
      <div className={style.idk}>
        <Coupon />
        <OrderSummary totalPrice={totalPrice} totalItems={totalItems} />
      </div>
      </div>
    </>
  );
}
