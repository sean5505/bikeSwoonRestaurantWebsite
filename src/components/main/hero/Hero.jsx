import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import { ThemeContext } from '../../../ThemeContext'

export default function Hero() {

  const {theme} = useContext(ThemeContext)
  return (
    <section className='hero' style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}}>
         
        <img src="./assets/heroImage.webp" className="heroImg" alt=""/>
    
        <div className="heroInfo" >
            <p className='heading'>BikeSwoon</p>
            <p className='subHeading'>Maryland</p>
            <p className='description'> Welcome to BikeSwoon, where we're passionate about providing our guests with an
             unforgettable dining experience. Our cozy and inviting atmosphere, coupled with exceptional service and delicious food,
            is what sets us apart from the rest. Whether you're joining us for a romantic dinner for two, a family celebration, or a
             night out with friends, we promise to make your visit to BikeSwoon a memorable one. So come on in, relax, and 
             let us take care of you. We can't wait to see you!
            </p>
            <Link to = '/reservations'>
            <button className='heroButton'> Reserve a Table</button>
            </Link>
        </div>
    </section>
  )
}
