import React, { useContext } from 'react'
import style from './promotional.module.css'
import { ThemeContext } from '../../../ThemeContext'
import FramerMotion from '../../../FramerMotion'

export default function Promotional() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
    <FramerMotion>
    <section className={style.about}style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}} >
        <h2>BikeSwoon</h2>
        <h4>Baltimore, Maryland</h4>
        <button>More</button>
    </section>
    <section className={style.someInfo} style={{backgroundColor: theme.secondaryColor, color: theme.PrimaryColor}} >
        <h4 className={style.infoText}>
          Welcome to our restaurant! Our goal is to provide you with an exceptional dining experience that engages all your senses.
           We use the freshest and finest ingredients to prepare dishes inspired by global cuisines. Our chefs use innovative techniques
            to create exquisite dishes that are both visually stunning and delicious. Our warm and inviting ambiance and attentive servers
             ensure you feel welcome and well taken care of. Come join us and discover the magic of culinary artistry!
        </h4>
    </section>
    </FramerMotion>
    
    </>
  )
}
