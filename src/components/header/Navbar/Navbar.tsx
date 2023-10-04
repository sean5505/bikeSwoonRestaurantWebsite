import  {  useContext } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { ModalContext } from "../../../context/AppContext";
import { getAuth } from "firebase/auth";
import Modal from "../../Modal/Modal";
import AuthDetails from "../../AuthDetails";

export const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Menu", path: "/menu" },
  { title: "Reservations", path: "/reservations" },
  { title: "Cart", path: "/order" },
];

type NavProps = {
  navRef: React.MutableRefObject<HTMLElement | null>,
  showNavBar: () => void,

}
export default function Navbar(props : NavProps) {
  const auth = getAuth();
  const conditionalNavLink = [{ title: "Login", path: "/login" }];

  const allNavLinks = !auth.currentUser
    ? [...navLinks, ...conditionalNavLink]
    : [...navLinks];
  const { openModal } = useContext(ModalContext);

  return (
    <>
      <nav ref={props.navRef}>
        <ul className={style.navLinks}>
          {allNavLinks.map((link) => (
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
          {auth.currentUser ? (
            <>
              <div className={style.navLink} onClick={openModal}>
                Sign Out
              </div>{" "}
              <Modal>
                <AuthDetails />
              </Modal>{" "}
            </>
          ) : (
            ""
          )}

          <button className={style.navBtn} onClick={props.showNavBar}>
            <Close className={style.closeButton} />
          </button>
        </ul>
      </nav>
    </>
  );
}
