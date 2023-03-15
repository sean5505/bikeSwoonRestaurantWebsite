import React, { useContext, useState } from 'react'
import './rightContainer.css'
import { RemoveCircleOutline } from '@mui/icons-material'
import { ThemeContext } from '../../../ThemeContext';



export default function RightContainer(props) {
  const [quantity, setQuantity] = useState('1')
  const {theme} = useContext(ThemeContext)
  
  const [items, setItems] = useState([]);

 
  return ( //ok i see an idea
    <>
     <section className='menuRightContainer' style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}}>
       <h2 className='menuRightHeader'>Your Cart</h2>
       <div className="cartItems">
        <div className="cartItem">
          <img className="cartItemImg" src="./assets/banner.jpg" alt='just a placeholder'/>
          <div className="cartItemPrice">$272</div>
          <div className="cartItemQuantity">1</div>
          <div className="removeFromCart">
          <RemoveCircleOutline/>
          </div>
       </div>
      </div>
      
      
       
    <div className="orderTotal">Order Total: </div>
    <button className='orderNow'>Place Your Order</button>

    </section>
    </>
  )
}
