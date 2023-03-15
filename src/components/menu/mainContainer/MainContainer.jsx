
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../ThemeContext';
import MenuItem from './MenuItem';
import { menuItems } from './menuItemsData';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './mainContainer.css';

function sortByPrice(items, sortOrder, searchText) {
  let sortedItems = [...items];

  if (searchText) {
    sortedItems = filterItems(items, searchText);
  }

  sortedItems.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    if (priceA < priceB) {
      return sortOrder ? 1 : -1;
    } else if (priceA > priceB) {
      return sortOrder ? -1 : 1;
    } else {
      return 0;
    }
  });

  return sortedItems;
}


function filterItems(items, searchText) {
  if (!searchText) {
    return items;
  }
  const filteredItems = [...items].filter(item =>
    item.type.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredItems;
}

export default function MainContainer() {
  const { theme } = useContext(ThemeContext);
  const [sortOrder, setSortOrder] = useState(false);
  const [sortedItems, setSortedItems] = useState(menuItems);
  const [searchText, setSearchText] = useState('');

  const handleSortClick = () => {
    const newSortOrder = !sortOrder;
    const newSortedItems = sortByPrice(menuItems, newSortOrder, searchText); 
    setSortedItems(newSortedItems);
    setSortOrder(newSortOrder);
  }
  

  const showAll = () => {
    setSortedItems(menuItems);
    setSearchText('')
  };

  const filterByType = type => {
    setSortedItems(filterItems(menuItems, type));
    setSearchText(type)
  };

  return (
    <section
      className='menuMainContainer'
      style={{ backgroundColor: theme.secondaryColor }}
    >
      <h2
        className='menuHeader'
        style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
      >
        Main Menu
      </h2>
      <div className='sortContainer'>
        <button className='sortButton' onClick={showAll}>
          All
        </button>
        <button className='sortButton' onClick={() => filterByType('Main')}>
          Main
        </button>
        <button
          className='sortButton'
          onClick={() => filterByType('Appetizers')}
        >
          Appetizers
        </button>
        <button className='sortButton' onClick={() => filterByType('Specials')}>
          Specials
        </button>
        <button className='sortButton' onClick={handleSortClick}>
          {!sortOrder ? (
            <>
              Sort by Descending
              <ArrowDownward />
            </>
          ) : (
            <>
              Sort by Ascending
              <ArrowUpward />
            </>
          )}
        </button>
      </div>
      <div className='menuItems'>
        {sortedItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
