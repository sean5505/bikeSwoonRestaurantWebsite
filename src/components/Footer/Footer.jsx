import React, { useContext } from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/AppContext"
import { navLinks } from "../header/Navbar/Navbar";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer style={{ backgroundColor: theme.secondaryColor }}>
      <div>
        <img className={style.footerImg} src="/assets/owner.webp" alt="" />
      </div>
        <ul className={style.listElements}>
          <li className={style.listElement}>
            <h3 className={style.listHead}>Doormat Navigation</h3>
            <ul>
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link to={link.path} className={style.doorLink}>
                  {link.title}
                </Link>
              </li>
            ))}
            </ul>
          </li>
          <li className={style.listElement}>
            <h3 className={style.listHead}>Contact</h3>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </li>
          <li className={style.listElement}>
            <h3 className={style.listHead}>Socials</h3>
            <ul>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </li>
        </ul>
    </footer>
  );
}
