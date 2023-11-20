import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import style from "./SortMenuOptions.module.css";
import { useState } from "react";
import { DocumentData } from "firebase/firestore";

type Props = {
  menuItems: DocumentData[] | undefined;
  setSortedItems: React.Dispatch<
    React.SetStateAction<DocumentData[] | undefined>
  >;
};
function sortByPrice(
  items: DocumentData[],
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

function filterItems(items: DocumentData[], searchText: string) {
  if (!searchText) {
    return items;
  }
  const filteredItems = items.filter((item: DocumentData) =>
    item.type.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredItems;
}
function SortMenuOptions({ setSortedItems, menuItems }: Props) {
  const sortOptions = ["Main", "Appetizers", "Specials"];
  const [sortOrder, setSortOrder] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeButton, setActiveButton] = useState("All");

  const handleSortClick = () => {
    const newSortOrder = !sortOrder;
    if (menuItems) {
      const newSortedItems = sortByPrice(menuItems, newSortOrder, searchText);
      setSortedItems(newSortedItems);
      setSortOrder(newSortOrder);
    }
  };

  const showAll = () => {
    setSortedItems(menuItems);
    setSearchText("");
    setActiveButton("All");
  };

  const filterByType = (type: string) => {
    if (menuItems) {
      setSortedItems(filterItems(menuItems, type));
      setSearchText(type);
      setActiveButton(type);
    }
  };

  return (
    <>
      <div className={style.sortContainer}>
        <button
          className={
            activeButton === "All" ? style.activeSortButton : style.sortButton
          }
          onClick={showAll}
        >
          All
        </button>
        {sortOptions.map(
          (
            option,
            index //index is fine
          ) => (
            <button
              key={index}
              onClick={() => filterByType(option)}
              className={
                activeButton === option
                  ? style.activeSortButton
                  : style.sortButton
              }
            >
              {option}
            </button>
          )
        )}
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
    </>
  );
}

export default SortMenuOptions;
