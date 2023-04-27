import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../ThemeContext';
import MenuItem from './MenuItem';
import { menuItems } from './menuItemsData';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import style from './mainContainer.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';

import { nanoid } from '@reduxjs/toolkit';

function sortByPrice(items, sortOrder, searchText) {
  let sortedItems = [...items];

  if (searchText) {
    sortedItems = filterItems(items, searchText);
  }

  sortedItems.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return sortOrder ? priceB - priceA : priceA - priceB;
  });

  return sortedItems;
}

function filterItems(items, searchText) {
  if (!searchText) {
    return items;
  }
  const filteredItems = items.filter(item =>
    item.type.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredItems;
}

export default function MainContainer() {
  const { theme } = useContext(ThemeContext);
  const [sortOrder, setSortOrder] = useState(false);
  const [sortedItems, setSortedItems] = useState(menuItems);
  const [searchText, setSearchText] = useState('');
  const [activeButton, setActiveButton] = useState('All');
  const dispatch = useDispatch()
  

  const updateCart = (item) => { //cart from store 
    dispatch(addToCart(item))
  }



  /* really gonna need to know redux... FUCKKCKCKCK idk im interested
  but learning it seems tedious although necessary for my goals */
  /*const updateCart = (item) => {
    console.log(`a new cart item has been created for ${item.name}`)
    setCartItems([...cartItems, {
     id:cartItems.length,
     name: item.name ,
     price: item.price,
     img: item.img
    } 
   ])
  
   }*/

  const handleSortClick = () => {
    const newSortOrder = !sortOrder;
    const newSortedItems = sortByPrice(menuItems, newSortOrder, searchText);
    setSortedItems(newSortedItems);
    setSortOrder(newSortOrder);
   
  };

  const showAll = () => {
    setSortedItems(menuItems);
    setSearchText('');
    setActiveButton('All');
  };

  const filterByType = (type) => {
    setSortedItems(filterItems(menuItems, type));
    setSearchText(type);
    setActiveButton(type);
  };

  return (
    <>
    <section
      className={style.menuMainContainer}
      style={{ backgroundColor: theme.secondaryColor }}
    >
      <h2
        className={style.menuHeader}
        style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
      >
        Main Menu
      </h2>
      <div className={style.sortContainer}>
        <button
          className={style.sortButton}
          onClick={showAll}
          style={{ backgroundColor: activeButton === 'All' ? 'red' : '' }}
        >
          All
        </button>
        <button
          className={style.sortButton}
          onClick={() => filterByType('Main')}
          style={{ backgroundColor: activeButton === 'Main' ? 'red' : '' }}
        >
          Main
        </button>
        <button
          className={style.sortButton}
          onClick={() => filterByType('Appetizers')}
          style={{ backgroundColor: activeButton === 'Appetizers' ? 'red' : '' }}
        >
          Appetizers
        </button>
        <button
          className={style.sortButton}
          onClick={() => filterByType('Specials')}
          style={{ backgroundColor: activeButton === 'Specials' ? 'red' : '' }}
        >
          Specials
        </button>
        <button
          className={style.sortButton}
          onClick={handleSortClick}
          
        >
          {sortOrder ? (
            <>
              Sort Price by Ascending
              <ArrowUpward />
            </>
          ) : (
            <>
              Sort Price by Descending
              <ArrowDownward />
            </>
          )}
        </button>
      </div>
      <ul className={style.menuItems}>
        {sortedItems.map(item => (
          <MenuItem key={item.id} item={item} updateCart = {updateCart} />
        ))}
      </ul>
    </section>
    </>
  );
}
