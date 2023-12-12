import { DocumentData } from "firebase/firestore";

import MenuItem from "./MenuItem/MenuItem";
import style from "./MenuContainer.module.css";

import Pagination from "../utils/Pagination/Pagination";

type Props = {
  sortedItems: DocumentData[] | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
function MainMenuItems({ sortedItems, currentPage, setCurrentPage }: Props) {
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {sortedItems && (
        <>
          <ul className={style.menuItems}>
            {currentItems?.map((item: DocumentData) => (
              <MenuItem item={item} />
            ))}
          </ul>

          <Pagination
            totalItems={sortedItems.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  );
}

export default MainMenuItems;
