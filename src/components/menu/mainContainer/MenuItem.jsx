import React, { useEffect } from 'react'





export default function MenuItem(props) {
  const updateCart = () => {
   console.log(`a new cart item has been created for ${props.item.name}`)
  };

  return (
    <div className="menuItem">
      <img className="itemImg" src={props.item.img} />
      <div className="itemName">{props.item.name}</div>
      <div className="itemPrice">${props.item.price}</div>
      <button className="addButton" type="submit" onClick={updateCart}>
        Add to Cart
      </button>
    </div>
  );
}
