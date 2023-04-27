import React, { useContext } from 'react'
import style from './Testimonials.module.css'

import { ThemeContext } from '../../../ThemeContext'
import { Testimonialss } from './testimonialData'
import Testimonial from './Testimonial'
import FramerMotion from '../../../FramerMotion'

export default function Testimonials() {
    const {theme} = useContext(ThemeContext)
   
  return (
    <FramerMotion>
    <section className={style.testimonials} style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}} >
        <h1 className={style.header}>Testimonial</h1>
        <ul className={style.reviews}>
        {Testimonialss.map((testimonial) => (
               <Testimonial key = {testimonial.id} testimonial ={testimonial} />
            ))} 
            
        </ul>
    </section>
    </FramerMotion>
  )
}
