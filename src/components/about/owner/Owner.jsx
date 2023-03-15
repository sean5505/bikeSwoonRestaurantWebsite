import React, { useContext } from 'react'
import { ThemeContext } from '../../../ThemeContext'
import './owner.css'

export default function Owner() {
  const {theme} = useContext(ThemeContext)
  return (
    <section className='owner' style={{backgroundColor:theme.primaryColor}}>
        <div className="ownerInfo">
            <h1 className='heading'>Antonio Riveras</h1>
            <h3 className='subHeading'>The Creator</h3>
            <h4 className='description'> My name is Antonio Riveras. As the founder of this restaurant, I set out on a mission to create a dining experience that not only
             satisfies the palate but also delights the senses. Drawing from my passion for culinary arts and my extensive experience in the food
              industry, I have poured my heart and soul into every aspect of this establishment. From curating the menu to designing the ambiance,
               I have spared no effort in crafting a unique and memorable dining experience for our guests. It is my pleasure to welcome you to
                our restaurant and to share with you the vision that inspired its creation.
            </h4>
        </div>

    <div className = 'imageContainer'>
        <img src="./assets/owner.webp" className="ownerImg" alt=""/>
    </div>
    </section>
  )
}

  