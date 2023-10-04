import  { useContext, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart } from "@mui/icons-material";
import { useAppSelector } from "../../../app/hooks";
import { ThemeContext } from "../../../context/AppContext";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const navRef = useRef<HTMLElement | null>(null);
  const cart = useAppSelector((state) => state.cart);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current?.classList.toggle(style.responsiveNav);
    }
  };
  
  return (
    <header
      className={style.headerComp}
      style={{ backgroundColor: theme.secondaryColor }}
    >
      <div>
        <Link to="/">
          <img
            src="./assets/logo.jpg"
            alt="logo"
            className={style.headerLogo}
          ></img>
        </Link>
      </div>
      <div className={style.headerNavBar}>
        <Navbar navRef={navRef} showNavBar={showNavBar} />
        <div className={style.cart}>
          <Link to="/order">
            <button className={style.navBtn}>
              <ShoppingCart />
            </button>
            <span className={style.cartTotal} >{cart.length}</span>
          </Link>
        </div>
        <button className={style.navBtn} onClick={showNavBar}>
          <Menu />
        </button>
      </div>
    </header>
  );
}
