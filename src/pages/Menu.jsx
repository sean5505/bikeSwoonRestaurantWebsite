import React, { useReducer } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import SideBar from '../components/menu/sidebar/SideBar'
import MainContainer from '../components/menu/mainContainer/MainContainer'
import RightContainer from '../components/menu/rightContainer/RightContainer'
const initialState = {count: 0}


function updateState(state, action){
  switch (action.type) {
    case 'ADD TO CART':
    return {...state, count: state.count + 1};
    case 'REMOVE FROM CART':
  return {...state, count: state.count - 1}
    default:
      return
  }
}

export default function Menu() {

 

  return (
    <>
    <Header/>
    <div style={{display:'flex', width:'100%'}}>
      
      <MainContainer/>
      <RightContainer />
    </div>
    
    <Footer/>
    </>
  )
}
