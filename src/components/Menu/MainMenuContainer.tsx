import { useQuery } from "@tanstack/react-query";
import { DocumentData } from "firebase/firestore";
import { useContext, useState } from "react";
import LoadingSpinner from "../utils/LoadingSpinner/LoadingSpinner";
import FetchFromDB from "../utils/FetchFromDB";
import MainMenuItems from "./MainMenuItems";
import SortMenuOptions from "./SortMenuOptions/SortMenuOptions";
import { ThemeContext } from "../../context/AppContext";
import style from "./MenuContainer.module.css";

function MainMenuContainer() {
  const { theme } = useContext(ThemeContext);
  const [sortedItems, setSortedItems] = useState<DocumentData[] | undefined>(); // will be used to, originally populate with the data from database, then manipulated with the set as the original object should never be mutated
  const { isPending, error, data } = useQuery<DocumentData[] | undefined>({
    queryKey: ["menuItemsDataa"],
    queryFn: () => getData(),
  });

  if (isPending) return <LoadingSpinner />;

  if (error) return "An error has occurred: " + error.message;
  async function getData() {
    try {
      const dataFromFireStore = await FetchFromDB("menuItems");
      if (dataFromFireStore.length === 0) {
        throw new Error("MenuItems data could not be found");
      } else setSortedItems(dataFromFireStore);
      return dataFromFireStore;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  return (
    <>
      <section
        style={{ backgroundColor: theme.secondaryColor, minHeight: "80dvh" }}
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
        <div>
          <SortMenuOptions menuItems={data} setSortedItems={setSortedItems} />
        </div>
        <div style={{ backgroundColor: theme.secondaryColor }}>
          <MainMenuItems sortedItems={sortedItems} />
        </div>
      </section>
    </>
  );
}

export default MainMenuContainer;
