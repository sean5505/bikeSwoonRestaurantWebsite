import React, { useContext, useRef } from 'react'
import Navbar from './Navbar'
import style from '../../styles/Header.module.css'
import { Link } from 'react-router-dom'
import { Menu, ShoppingCart } from '@mui/icons-material'
import { ThemeContext } from '../context/ThemeContext' 
import { useSelector } from 'react-redux'

export default function Header() {
  const {theme} = useContext(ThemeContext)
  const navRef = useRef()
  const Cart = useSelector((state) => state.cart)

 const showNavBar = () =>{
    navRef.current.classList.toggle(style.responsiveNav)
 }


 
  return (
    <header className={style.headerComp} style ={{backgroundColor: theme.secondaryColor}}>
      <div>
      <Link to ="/">
        <img src='./assets/logo.jpg' alt='logo' className={style.headerLogo}></img>
       </Link>
       </div>
       <div>
       </div>
       <div className={style.headerNavBar}>
        <Navbar navRef = {navRef} showNavBar = {showNavBar}/>
      
        <button className={style.navBtn} onClick= {showNavBar}>
                    <Menu/>
                </button>
        
        </div>
                
        
    </header>
  )
}
