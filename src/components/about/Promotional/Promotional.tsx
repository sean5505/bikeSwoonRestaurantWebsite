import { useContext } from "react";
import style from "./promotional.module.css";
import { ThemeContext } from "../../../context/AppContext";

export default function Promotional() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={style.about}>
        <div
          className={style.item1}
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.secondaryColor,
          }}
        >
          <h2>BikeSwoon</h2>
          <h4>Baltimore, Maryland</h4>
        </div>

        <div
          className={style.someInfo}
          style={{
            backgroundColor: theme.secondaryColor,
            color: theme.primaryColor,
          }}
        >
          <p>
            Welcome to our restaurant! Our goal is to provide you with an
            exceptional dining experience that engages all your senses. We use
            the freshest and finest ingredients to prepare dishes inspired by
            global cuisines. Our chefs use innovative techniques to create
            exquisite dishes that are both visually stunning and delicious. Our
            warm and inviting ambiance and attentive servers ensure you feel
            welcome and well taken care of. Come join us and discover the magic
            of culinary artistry!
          </p>
        </div>
      </section>
    </>
  );
}
