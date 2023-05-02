import React, { useContext } from 'react'
import style from "../styles/Footer.module.css"
import { Link } from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext'
import FramerMotion from './FramerMotion' 

export default function Footer() {

  const {theme} = useContext(ThemeContext)
  return (
    <>
    <FramerMotion>

      
  <footer style={{ backgroundColor: theme.secondaryColor }}>
    
  <section className={style.item1}>
    <img className={style.footerImg} src="/assets/owner.webp" alt="" />
  </section>
  

  <section className={style.linksContainer}>
    <ul className={style.linkElement}>
      <li className={style.listElements}>
        <h3 className={style.listHead}>Doormat Navigation</h3>
        <ul>
          <li>
            <Link className={style.doorLink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={style.doorLink} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={style.doorLink} to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className={style.doorLink} to="/reservations">
              Reservations
            </Link>
          </li>
          <li>
            <Link className={style.doorLink} to="/order">
              Order
            </Link>
          </li>
          <li>
            <Link className={style.doorLink} to="/login">
              Login
            </Link>
          </li>
        </ul>
      </li>
    </ul>

    <ul className={style.linkElement}>
      <li className={style.listElements}>
        <h3 className={style.listHead}>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </li>
    </ul>

    <ul className={style.linkElement}>
      <li className={style.listElements}>
        <h3 className={style.listHead}>Socials</h3>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </li>
    </ul>
  </section>
</footer>

    </FramerMotion>
    </>
  )
}
