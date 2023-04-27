import React from 'react'
import {Star} from '@mui/icons-material'
import style from './Testimonials.module.css'

export default function Testimonial(props) {
  return (
    <li className={style.review}>
                <div className={style.container}>
                    <img className = {style.reviewImg} src={props.testimonial.img} alt=""  />
                    <h3 className={style.reviewName}>{props.testimonial.name}</h3>
                </div>
                <h3 className={style.rating}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    </h3>
                <p className={style.description}>{props.testimonial.review}</p>
            </li>
  )
}
