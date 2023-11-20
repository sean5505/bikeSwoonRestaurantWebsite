import { DocumentData } from "firebase/firestore";

import MenuItem from "./MenuItem/MenuItem";
import style from './MenuContainer.module.css'

type Props = {
  sortedItems: DocumentData[] | undefined;
};
function MainMenuItems({ sortedItems }: Props) {
  return (
    <>
    <ul className={style.menuItems}>
      {sortedItems?.map((item: DocumentData) => (
        <MenuItem item={item} />
      ))}
      </ul>
    </>
  );
}

export default MainMenuItems;
