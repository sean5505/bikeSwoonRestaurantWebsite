import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import MyContext from '../components/context/MyContext'
import { ThemeContext } from '../components/context/ThemeContext'
import {TypeAnimation} from 'react-type-animation';
import FramerMotion from '../components/FramerMotion'

// gonna need to redo this with a different type library for 

export default function BookingConfirmation() {
  const {theme} = useContext(ThemeContext)
  const {resData} = useContext(MyContext)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton(true);
    }, 16500);
    return () => clearTimeout(timeoutId);
  }, []);

  //console.log(`resData submiteed by reservation is ${resData.name}`)
  return (
    <>
    <Header/>
    <FramerMotion>
    {resData ? (
  <div className='reservationConfirmed' style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}>
    <p><TypeAnimation sequence={[300,`Hello, ${resData.name}!`]} cursor={false}></TypeAnimation> </p>
  
    <p><TypeAnimation sequence ={[2300, `Your Reservation for ${resData.date} @ ${resData.time} has been sucessfully submitted!`]} cursor={false}></TypeAnimation></p>
   
    <p><TypeAnimation sequence = {[7300, `You will recieve an email confirmation shortly at \n${resData.email}`]} cursor={false}> </TypeAnimation></p>
    <p><TypeAnimation sequence = {[12300, 'Click the button below to return to the Homepage']} cursor= {false}></TypeAnimation></p>
    <Link to= '/' >
      {showButton && <button>Home</button>}
    </Link>
  </div>
) : (
  <div className='reservationConfirmed' style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}>
  <p>Click the button below to submit a reservation!</p>
  <Link to= '/reservations' >
  <button>Go</button>

  </Link>
</div>
)} 
</FramerMotion>
    <Footer/>
    </>
  )
}



