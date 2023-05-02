import React, {useEffect, useState} from 'react'
import style from '../../styles/rightContainer.module.css'
import { RemoveShoppingCart } from '@mui/icons-material'
import { useDispatch} from 'react-redux'
import { deleteFromCart } from '../../features/cart/cartSlice'

export default function CartItem(props) {
  const [count, setCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(props.item.price);
  const initialItemPrice = props.item.price //had to set initialItemPrice for when the itemPrice was updated so the new itemPrice wasn't multiplied upon increment or decrement but cant help but feel this is amateurish
  const dispatch = useDispatch();

  const updateItemPrice = (totalItemPrice) => {
    setItemPrice(Number(Math.round(totalItemPrice * count * 100) / 100 || 0));
  };

  useEffect(() => {
    updateItemPrice(initialItemPrice);
  }, [count]);

  useEffect(() => {
    props.updateTotalPrice(itemPrice)
  },[itemPrice])

  const incrementQuantity = (count) => {
    setCount(count === 9 ? (alert("You have reached the item limit"), 9) : count + 1);
   
  };
  
  const decrementQuantity = (count) => {
    setCount(count === 1 ? 1 : count - 1);
   
  };
  
  return (
    <li className={style.cartItem}>
      <img className={style.cartItemImg} src={props.item.img} alt={props.item.name} />
      <div className={style.cartItemPrice}>${itemPrice} </div>
      <div className={style.itemCount}>
        <button
          className={style.countButton}
          onClick={() => decrementQuantity(count)}
        >
          -
        </button>
        {count}
        <button
          className={style.countButton}
          onClick={() => incrementQuantity(count)}
        >
          +
        </button>
      </div>
      <div className={style.removeFromCart}>
        <RemoveShoppingCart onClick={() => dispatch(deleteFromCart(props.item))} />
      </div>
    </li>
  );
}
