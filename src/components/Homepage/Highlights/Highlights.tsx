import { useContext } from "react";
import style from "./Highlights.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/AppContext";
import Carousel from "../../utils/Carousel/Carousel";
import { useAppDispatch } from "../../../app/hooks";
import { addToCart } from "../../../features/cart/cartSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { MenuItems } from "../../../types/types";
import { menuItems } from "../../Menu/menuItemsData";

const createHighlight = (
  highlight: MenuItems,
  key: number,
  dispatch: Dispatch
) => {
  return (
    <li key={key} className={style.item}>
      <img src={highlight.img} alt={highlight.name} height={"200px"} />
      <div className={style.itemHead}>
        <h4>{highlight.name}</h4>
        <h4 className={style.price}> ${highlight.price}</h4>
      </div>

      <p className={style.itemDescription}>{highlight.desc}</p>
      <button onClick={() => dispatch(addToCart(highlight))}>
        Add To Cart
      </button>
    </li>
  );
};

export default function Highlights() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const specials = menuItems.filter((item: MenuItems) =>
    item.type.toLowerCase().includes("specials")
  );

  return (
    <>
      <section
        className={style.highlights}
        style={{ backgroundColor: theme.secondaryColor }}
      >
        <header
          className={style.highlightsHead}
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.secondaryColor,
          }}
        >
          <h1>Specials</h1>
          <Link to="/menu">
            <button className={style.highlightsHeadButton}>Order Now!</button>
          </Link>
        </header>
        <main>
          <Carousel>
            {specials.map((highlight) =>
              createHighlight(highlight, highlight.id, dispatch)
            )}
          </Carousel>
        </main>
      </section>
    </>
  );
}
