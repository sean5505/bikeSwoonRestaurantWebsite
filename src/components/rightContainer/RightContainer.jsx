import React, { useContext, useEffect, useReducer, useState } from 'react'
import style from '../../styles/rightContainer.module.css'
import { ThemeContext } from '../context/ThemeContext'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';





export default function RightContainer() {
  const {theme} = useContext(ThemeContext)
  const cart = useSelector((state) => state.cart)
  console.log(cart)
  const [totalPrice, setTotalPrice] = useState(0);
 

 
  useEffect(() => {
    let price = 0;
    for (const item of cart) {
      price += parseFloat(item.price);
    }
    setTotalPrice(parseFloat(price.toFixed(2)));
    console.log( totalPrice +' is the total price')
  }, [cart]);

  const updateTotalPrice = (itemPrice) => {
// hmmmm
    setTotalPrice( itemPrice)
  }
 
  //this is going to take a while... perhaps a complete overhaul sigh what am I not understanding?
  /* ok so this is the idea, redux -- utlize cart in this component -- do a map loop
  for each cartItem, WHERE I THEN call the cart item component which I already
  have styled just need to figure out redux and have like a bigger cart for the
  order page, idk bout that page yet but imma need to be big brained */

 
  return (
    <>
      <section className={style.menuRightContainer} style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}}>
        <h2 className={style.menuRightHeader}>Your Cart</h2>
        <ul className={style.cartItems}>
          {cart.length === 0 ? (
            <p style={{textAlign: 'center'}}>The cart is empty</p>
          ) : (
            <>
              {cart.map((item) => <CartItem key={item.id} item={item} updateTotalPrice ={updateTotalPrice} />)}
              <p>Total Items: {cart.length}</p>
              <p className={style.orderTotal}>Order Total: $ {typeof totalPrice === 'number' ? totalPrice.toFixed(2) : '0.00'}</p>
              <button className={style.orderNow}>Place Your Order</button>
            </>
          )}
        </ul>
       
      </section>
    </>
  );
}  
