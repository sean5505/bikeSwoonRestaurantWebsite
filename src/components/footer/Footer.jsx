import React, { useContext } from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemeContext'

export default function Footer() {

  const {theme} = useContext(ThemeContext)
  return (
    <footer id='footer' style = {{backgroundColor: theme.secondaryColor}}>
      <div className="item1">
      <img className='footerImg' src="/assets/owner.webp" alt=""  />
      </div>
      <>
  <div className="linksContainer">
  <ul className="item2">
  <div className="listElements">
    <li className="listHead">Doormat Navigation</li>
    <li><Link className="door-link" to="/">Home</Link></li>
    <li><Link className="door-link" to="/about">About</Link></li>
    <li><Link className="door-link" to="/menu">Menu</Link></li>
    <li><Link className="door-link" to="/reservations">Reservations</Link></li>
    <li><Link className="door-link" to="/order">Order</Link></li>
    <li><Link className="door-link" to="/login">Login</Link></li>
    </div>
  </ul>
  <ul className="item2">
  <div className="listElements">
    <li className="listHead">Contact</li>
    <li>Address</li>
    <li>Phone Number</li>
    <li>Email</li>
    </div>
  </ul>
  <ul className="item2">
  <div className="listElements">
    <li className="listHead">Socials</li>
    <li>Twitter</li>
    <li>Instagram</li>
    <li>Facebook</li>
    </div>
  </ul>
  </div>
</>


    </footer>
  )
}
