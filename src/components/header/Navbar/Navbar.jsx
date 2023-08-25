import React, { useState } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material";

export const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Menu", path: "/menu" },
  { title: "Reservations", path: "/reservations" },
  { title: "Cart", path: "/order" },
  { title: "Login", path: "/login" },
];

export default function Navbar(props) {
 
  return (
    <>
      <nav ref={props.navRef}>
        <ul className={style.navLinks}>
          {navLinks.map((link) => (
            <li key={link.title}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.navLinkActive : style.navLink
                }
                to={link.path}
              >
                {link.title}
              </NavLink>
            </li>
          ))}

          <button className={style.navBtn} onClick={props.showNavBar}>
            <Close className={style.closeButton} />
          </button>
        </ul>
      </nav>
    </>
  );
}
