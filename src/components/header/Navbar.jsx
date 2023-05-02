import React, {useState} from 'react'
import style from "../../styles/Navbar.module.css"
import {Link, NavLink } from 'react-router-dom'
import { Close} from '@mui/icons-material'





export default function Navbar(props) {


  
  return (
    <>
    <nav ref ={props.navRef}>
      <ul className={style.navLinks}>
        <li> 
        <NavLink className={({ isActive}) =>
                 isActive ? style.navLinkActive : style.navLink} 
           to ="/" >Home 
          </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive}) =>
                 isActive ? style.navLinkActive : style.navLink} 
              to ='/about '>About </NavLink></li>
        <li> 
        <NavLink className={({ isActive}) =>
                 isActive ? style.navLinkActive : style.navLink} 
              to = '/menu'>Menu</NavLink></li>
        <li>
        <NavLink className={({ isActive}) =>
                 isActive ? style.navLinkActive : style.navLink} 
             to = "/reservations">Reservations </NavLink></li>
        <li>
        <NavLink className={({ isActive}) =>
                 isActive ? style.navLinkActive : style.navLink} 
             to = "/order">Order </NavLink></li>
        <li>
        <NavLink className={({ isActive}) =>
                 isActive ? style.navLinkActive : style.navLink} 
              to = '/login' >Login</NavLink></li>
        <button className={style.navBtn} onClick= {props.showNavBar}>
                    <Close className={style.closeButton}/>
                </button>
      </ul>
    </nav>
    </>

  )
}
