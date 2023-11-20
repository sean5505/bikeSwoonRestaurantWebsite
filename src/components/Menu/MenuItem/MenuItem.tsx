import { DocumentData } from "firebase/firestore";
import { useAppDispatch } from "../../../app/hooks";
import { addToCart } from "../../../features/cart/cartSlice";
import { MenuItems } from "../../../types/types";
import style from "./MenuItem.module.css";

type Props = {
  item: MenuItems | DocumentData;
};
export default function MenuItem(props: Props) {
  const dispatch = useAppDispatch();

  return (
    <>
      <li key={props.item.id} className={style.menuItem}>
        <img className={style.itemImg} src={props.item.img} />
        <span className={style.itemName}>{props.item.name}</span>
        <span className={style.itemPrice}>${(props.item.price).toFixed(2)}</span>
        <button
          className={style.addButton}
          onClick={() => dispatch(addToCart(props.item))}
        >
          Add to Cart
        </button>
      </li>
    </>
  );
}
