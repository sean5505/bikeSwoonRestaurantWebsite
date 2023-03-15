import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import { Close, Menu } from '@mui/icons-material'





export default function Navbar(props) {
  
  return (
    <nav ref ={props.navRef}>
      <ul className='nav-links'>
        <li> <Link className='nav-link' to ="/" >Home </Link></li>
        <li><Link className='nav-link' to ='/about '>About </Link></li>
        <li> <Link className='nav-link' to = '/menu'>Menu</Link></li>
        <li><Link className='nav-link' to = "/reservations">Reservations </Link></li>
        <li><Link className='nav-link' to = "/order">Order </Link></li>
        <li><Link className='nav-link' to = '/login' >Login</Link></li>
        <button className='nav-btn' onClick= {props.showNavBar}>
                    <Close className='closeButton'/>
                </button>
      </ul>
    </nav>

  )
}
