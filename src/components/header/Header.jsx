import React, { useContext, useRef } from 'react'
import Navbar from './navbar/Navbar'
import "./Header.css"
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import { ThemeContext } from '../../ThemeContext'



export default function Header() {
  const {theme} = useContext(ThemeContext)
  const navRef = useRef()

 const showNavBar = () =>{
    navRef.current.classList.toggle('responsive_nav')
 }
  return (
    <header className='headerComp' style ={{backgroundColor: theme.secondaryColor}}>
      <div>
      <Link to ="/">
        <img src='./assets/logo.jpg' alt='logo' className= 'headerLogo'></img>
       </Link>
       </div>
       <div className='headerNavBar'>
        <Navbar navRef = {navRef} showNavBar = {showNavBar}/>
        <button className='nav-btn' onClick= {showNavBar}>
                    <Menu/>
                </button>
        </div>
                
        
    </header>
  )
}
