import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Homepage/Hero.module.css";
import { ThemeContext } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
        <section
          className={style.hero}
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.secondaryColor,
          }}
        >
          <img src="./assets/heroImage.webp" className={style.heroImg} alt="" />

          <div className={style.heroInfo}>
            <h1> BikeSwoon</h1>
            <h2> Maryland</h2>
            <p>
              Welcome to BikeSwoon, where we're passionate about providing our
              guests with an unforgettable dining experience. Our cozy and
              inviting atmosphere, coupled with exceptional service and
              delicious food, is what sets us apart from the rest. Whether
              you're joining us for a romantic dinner for two, a family
              celebration, or anight out with friends, we promise to make your
              visit to BikeSwoon a memorable one. So come on in, relax, and let
              us take care of you. We can't wait to see you!,
            </p>
            <Link to="/reservations">
              <button> Reserve a Table</button>
            </Link>
          </div>
        </section>
    </>
  );
}
