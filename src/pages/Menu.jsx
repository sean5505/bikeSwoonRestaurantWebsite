import React, { useReducer } from 'react'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import MainContainer from '../components/mainContainer/MainContainer'
import RightContainer from '../components/rightContainer/RightContainer'
import { ToastContainer } from 'react-toastify'

export default function Menu() {

  return (
    <>
    <Header/>
    <div style={{display:'flex', width:'100%'}}>
      
      <MainContainer/>
      <RightContainer/>
    </div>
    
    <Footer/>
    </>
  )
}
