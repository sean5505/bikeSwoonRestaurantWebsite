import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import { ThemeContext } from "../context/ThemeContext";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartContainer() {
  const { theme } = useContext(ThemeContext);
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  console.log(cart);

  /* ok so this is for any additions/deletions to the cart */
  useEffect(() => {
    let price = 0;
    for (const item of cart) {
      price += parseFloat(item.price);
    }
    setTotalPrice(parseFloat(price.toFixed(2)));
  }, [cart.length]);

  //what about changes to the quantity?
  const updateTotal = (newItemPrice) => {
    cart.forEach((item) => { 
      setTotalPrice(totalPrice )

    })
   
   
  };

  console.log(totalPrice)
  return (
    <>
      <section
        className={style.cartContainer}
        style={{
          backgroundColor: theme.primaryColor,
          color: theme.secondaryColor,
        }}
      >
        <h2 className={style.cartHeader}>Your Cart</h2>
        <ul className={style.cartItems}>
          {cart.length === 0 ? (
            <>
              <p>The cart is empty</p>
              <Link to="/menu">
                <button>Order Now</button>
              </Link>
            </>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} updateTotal = {updateTotal} />
              ))}
              <p>Total Items: {cart.length}</p>
              <p className={style.orderTotal}>
                Order Total: ${Number(totalPrice).toFixed(2)}
              </p>
              <div className={style.orderButtons}>
                <Link to="/menu">
                  <button>Add more items</button>
                </Link>
                <button className={style.orderNow}>Place Your Order</button>
              </div>
            </>
          )}
        </ul>
      </section>
    </>
  );
}
