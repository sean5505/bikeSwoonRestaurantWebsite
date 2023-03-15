import React from 'react'
import {Star} from '@mui/icons-material'

export default function Testimonial(props) {
  return (
    <div className="review">
                <div className="container">
                    <img src={props.testimonial.img} alt=""  />
                    <h3>{props.testimonial.name}</h3>
                </div>
                <h3 className='rating'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    </h3>
                <p className='description'>{props.testimonial.review}</p>
            </div>
  )
}
