import React, { useContext } from "react";
import style from "./Highlights.module.css";
import { highlightData } from "./highlightData";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/AppContext";
import Carousel from "../../Carousel";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";

const createHighlight = (highlight, key, dispatch) => {
  return (
    <li key={key} className={style.item}>
      <img src={highlight.img} alt="" height={"200px"} />
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
  const { theme } = useContext(ThemeContext) || {};
  const dispatch = useDispatch();

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
            {highlightData.map((highlight) =>
              createHighlight(highlight, highlight.id, dispatch)
            )}
          </Carousel>
        </main>
      </section>
    </>
  );
}
