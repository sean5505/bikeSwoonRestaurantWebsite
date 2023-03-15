import React, { useContext } from 'react'
import './Testimonials.css'

import { ThemeContext } from '../../../ThemeContext'
import { Testimonialss } from './testimonialData'
import Testimonial from './Testimonial'


export default function Testimonials() {
    const {theme} = useContext(ThemeContext)
  return (
    <section className='testimonials' style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}} >
        <h1 className='header'>Testimonials</h1>
        <div className="reviews">
        {Testimonialss.map((testimonial) => (
               <Testimonial key = {testimonial.id} testimonial ={testimonial} />
            ))} 
            
        </div>
    </section>
  )
}
