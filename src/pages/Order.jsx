import React, { useContext } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { ThemeContext } from '../ThemeContext'

export default function Order() {
    const {theme} = useContext(ThemeContext)
  return (
    <>
    <Header/>
    <div style={{height:'68vh', display: 'flex', justifyContent: 'center',alignItems:'center', backgroundColor: theme.primaryColor, color: theme.secondaryColor, textAlign:'center', }}>
    <h2 >This page is currently unavailable<br/>
     Please come back at a later date</h2>
     </div>
     <Footer/>
     </>
  )
}
