
import style from "./Navbar.module.css";
import {  NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material";

import ProfileImage from "../../ProfileImage/ProfileImg";
import { auth } from "../../../firebase";

export const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Menu", path: "/menu" },
  { title: "Reservations", path: "/reservations" },
  { title: "Cart", path: "/cart" },
];

type NavProps = {
  navRef: React.MutableRefObject<HTMLElement | null>,
  showNavBar: () => void,

}
export default function Navbar(props : NavProps) {
  const conditionalNavLink = [{ title: "Login", path: "/login" }];

  const allNavLinks = !auth.currentUser
    ? [...navLinks, ...conditionalNavLink]
    : [...navLinks];


  return (
    <>
      <nav ref={props.navRef}>
        <ul className={style.navLinks}>
          
          {allNavLinks.map((link) => (
            <li key={link.title} title={link.title}>
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
          <ProfileImage/>

          <button className={style.navBtn} onClick={props.showNavBar}>
            <Close className={style.closeButton} />
          </button>
        </ul>
      </nav>
    </>
  );
}
