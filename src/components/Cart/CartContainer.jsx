import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/AppContext";
import { clearCart } from "../../features/cart/cartSlice";

export default function CartContainer() {
  const { theme } = useContext(ThemeContext);
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(cart.length);

  // will pass down to cartItem component for when there is an increment or decrement in an individals item price, this function will be called
  function updateTotal() {
    let price = 0;
    let quantity = 0;
    for (const item of cart) {
      price += parseFloat(item.price * item.quantity);
      quantity += item.quantity;
    }
    setTotalPrice(parseFloat(price.toFixed(2)));
    setTotalItems(quantity);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateTotal();
  }, [cart]);

  console.log(totalItems);
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
                <CartItem key={item.id} item={item} updateTotal={updateTotal} />
              ))}
              <p>Total Items: {totalItems}</p>
              <p className={style.orderTotal}>
                Order Total: ${Number(totalPrice).toFixed(2)}
              </p>
              <div className={style.orderButtons}>
                <Link to="/menu">
                  <button>Add more items</button>
                </Link>
                <button onClick={() => dispatch(clearCart())}>
                  {" "}
                  Clear Cart
                </button>
                <button className={style.orderNow}>Place Your Order</button>
              </div>
            </>
          )}
        </ul>
      </section>
    </>
  );
}
