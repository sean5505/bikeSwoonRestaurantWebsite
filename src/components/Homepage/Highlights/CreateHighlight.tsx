
import style from "./Highlights.module.css";
import { DocumentData } from 'firebase/firestore';

import { addToCart } from "../../../features/cart/cartSlice";
import { useAppDispatch } from "../../../app/hooks";

type Props = {
    highlight: DocumentData,
    key: number
}
function CreateHighlight (props: Props
 
  ) {
    const dispatch = useAppDispatch();
    return (
      <li key={props.key} className={style.item}>
        <img src={props.highlight.img} alt={props.highlight.name} height={"200px"} title={props.highlight.name} />
        <div className={style.itemHead}>
          <h4>{props.highlight.name}</h4>
          <h4 className={style.price}> ${props.highlight.price}</h4>
        </div>
  
        <p className={style.itemDescription}>{props.highlight.description}</p>
        <button onClick={() => dispatch(addToCart(props.highlight))}>
          Add To Cart
        </button>
      </li>
    );
  };

export default CreateHighlight