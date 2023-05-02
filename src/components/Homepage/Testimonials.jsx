import React, { useContext } from 'react'
import style from '../../styles/Testimonials.module.css'

import { ThemeContext } from '../context/ThemeContext'
import { testimonialData } from '../../data/testimonialData'

import FramerMotion from '../FramerMotion'
import { Star } from '@mui/icons-material'

const createTestimonial = (testimonial, key) =>{
  return (

    <li className={style.review} key = {key}>
      <div className={style.container}>
        <img className = {style.reviewImg} src={testimonial.img} alt={testimonial.name}  />
        <h3 className={style.reviewName}>{testimonial.name}</h3>
      </div>
      <h3 className={style.rating}>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        </h3>
      <p className={style.description}>{testimonial.review}</p>
    </li>
  )
}

export default function Testimonials() {
    const {theme} = useContext(ThemeContext)
   
  return (
    <FramerMotion>
    <section className={style.testimonials} style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}} >
        <h1 className={style.header}>Testimonial</h1>
        <ul className={style.reviews}>
        {testimonialData.map((testimonial) => (
               createTestimonial(testimonial, testimonial.id)
            ))} 
            
        </ul>
    </section>
    </FramerMotion>
  )
}
