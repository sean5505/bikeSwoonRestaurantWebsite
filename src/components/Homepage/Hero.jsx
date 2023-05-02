import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import style from '../../styles/Hero.module.css'
import { ThemeContext } from '../context/ThemeContext'
import {TypeAnimation} from 'react-type-animation';
import FramerMotion from '../FramerMotion';


export default function Hero() {

  const {theme} = useContext(ThemeContext)
  return (
    <>
    
    <FramerMotion>
    <section className={style.hero} style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}}>
         
        <img src="./assets/heroImage.webp" className={style.heroImg} alt=""/>
    
        <div className={style.heroInfo} >
            <p className={style.heading}>BikeSwoon</p>
            <p className={style.subHeading}>Maryland</p>
            <p className={style.description}> <TypeAnimation sequence ={[300, "Welcome to BikeSwoon, where we're passionate about providing our guests with an unforgettable dining experience. Our cozy and inviting atmosphere, coupled with exceptional service and delicious food, is what sets us apart from the rest. Whether you're joining us for a romantic dinner for two, a family celebration, or anight out with friends, we promise to make your visit to BikeSwoon a memorable one. So come on in, relax, and let us take care of you. We can't wait to see you!"]} cursor={false} speed={100} >            
             </TypeAnimation></p>
            <Link to = '/reservations'>
            <button className={style.heroButton}> Reserve a Table</button>
            </Link>
        </div>
    </section>
    </FramerMotion>
    
    </>
  )
}
