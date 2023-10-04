import { useContext, useState } from "react";
import { ThemeContext } from "../../context/AppContext";
import MenuItem from "./MenuItem";
import { menuItems } from "./menuItemsData";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useAppDispatch } from "../../app/hooks";

import { addToCart } from "../../features/cart/cartSlice";
import style from "./MenuContainer.module.css";
import { MenuItems } from "../../types/types";

function sortByPrice(
  items: MenuItems[],
  sortOrder: boolean,
  searchText: string
) {
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

function filterItems(items: MenuItems[], searchText: string) {
  if (!searchText) {
    return items;
  }
  const filteredItems = items.filter((item: MenuItems) =>
    item.type.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredItems;
}

export default function MenuContainer() {
  const { theme } = useContext(ThemeContext);
  const [sortOrder, setSortOrder] = useState(false);
  const [sortedItems, setSortedItems] = useState(menuItems);
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState("All");
  const dispatch = useAppDispatch();

  const updateCart = (item: MenuItems) => {
    dispatch(addToCart(item));
  };

  const handleSortClick = () => {
    const newSortOrder = !sortOrder;
    const newSortedItems = sortByPrice(menuItems, newSortOrder, searchText);
    setSortedItems(newSortedItems);
    setSortOrder(newSortOrder);
  };

  const showAll = () => {
    setSortedItems(menuItems);
    setSearchText("");
    setActiveButton("All");
  };

  const filterByType = (type: string) => {
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
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.secondaryColor,
          }}
        >
          Main Menu
        </h2>
        <div className={style.sortContainer}>
          <button
            className={style.sortButton}
            onClick={showAll}
            style={{ backgroundColor: activeButton === "All" ? "red" : "" }}
          >
            All
          </button>
          <button
            className={style.sortButton}
            onClick={() => filterByType("Main")}
            style={{ backgroundColor: activeButton === "Main" ? "red" : "" }}
          >
            Main
          </button>
          <button
            className={style.sortButton}
            onClick={() => filterByType("Appetizers")}
            style={{
              backgroundColor: activeButton === "Appetizers" ? "red" : "",
            }}
          >
            Appetizers
          </button>
          <button
            className={style.sortButton}
            onClick={() => filterByType("Specials")}
            style={{
              backgroundColor: activeButton === "Specials" ? "red" : "",
            }}
          >
            Specials
          </button>
          <button className={style.sortButton} onClick={handleSortClick}>
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
          {sortedItems.map((item) => (
            <MenuItem key={item.id} item={item} updateCart={updateCart} />
          ))}
        </ul>
      </section>
    </>
  );
}
