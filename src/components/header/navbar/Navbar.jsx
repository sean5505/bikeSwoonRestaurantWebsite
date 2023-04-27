import React, {useState} from 'react'
import style from "./Navbar.module.css"
import {Link, } from 'react-router-dom'
import { Close, Menu } from '@mui/icons-material'





export default function Navbar(props) {

  const {isLinkActive, setIsLinkActive} = useState(false)
  
  return (
    <>
    <nav ref ={props.navRef}>
      <ul className={style.navLinks}>
        <li> <Link className={style.navLink} to ="/" >Home </Link></li>
        <li><Link className={style.navLink} to ='/about '>About </Link></li>
        <li> <Link className={style.navLink} to = '/menu'>Menu</Link></li>
        <li><Link className={style.navLink} to = "/reservations">Reservations </Link></li>
        <li><Link className={style.navLink} to = "/order">Order </Link></li>
        <li><Link className={style.navLink} to = '/login' >Login</Link></li>
        <button className={style.navBtn} onClick= {props.showNavBar}>
                    <Close className={style.closeButton}/>
                </button>
      </ul>
    </nav>
    </>

  )
}
