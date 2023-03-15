import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MyContext from '../MyContext'
import {ThemeContext} from '../ThemeContext'


export default function BookingConfirmation() {
  const {theme} = useContext(ThemeContext)
  const {resData} = useContext(MyContext)

  console.log(`resData submiteed by reservation is ${resData.name}`)
  return (
    <>
    <Header/>
    {resData ? (
  <div className='reservationConfirmed' style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}>
    <p>Hello, {resData.name}! </p>
    <p>Your Reservation for {resData.date} @ {resData.time} has been sucessfully submitted!</p>
    <p>You will recieve an email confirmation shortly at <br/>{resData.email}</p>
    <p>Click the button below to return to the Homepage</p>
    <Link to= '/' >
    <button> Home</button>
    </Link>
  </div>
) : (
  <div className='reservationConfirmed' style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}>
  <p>Click the button below to submit a reservation!</p>
  <Link to= '/reservations' >
  <button> Go</button>
  </Link>
</div>
)} 
    <Footer/>
    </>
  )
}



