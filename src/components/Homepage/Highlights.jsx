import React, { useContext } from 'react'
import style from '../../styles/Highlights.module.css'
import {highlightData} from '../../data/highlightData'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import FramerMotion from '../FramerMotion'


const createHighlight = (highlight, key) => {
  return (
    <FramerMotion key = {key}>
    <div className={style.item}>
      <img src={highlight.img} alt="" />
    <div className={style.itemHead}>
      <h4>{highlight.name} </h4>
      <h4 className ={style.price}> {highlight.price}</h4>
    </div>
    <div className={style.itemDescription}>
      <p>{highlight.desc}</p>
    </div>
</div>
</FramerMotion>
  )

}

export default function Highlights() {
  const {theme = {}} = useContext(ThemeContext) || {}
  return (
    <>
    <FramerMotion>
    <section className={style.highlights} style = {{backgroundColor: theme.secondaryColor}} >
        <header className={style.highlightsHead} style = {{backgroundColor:theme.primaryColor, color: theme.secondaryColor}}>
          <div className={style.sectionHead}>
            <h1>Specials</h1>
            </div>
            <div className={style.orderButton}>
            <Link to='/menu'>
            <button className={style.highlightsHeadButton}>Order Now!</button>
            </Link>
            </div>
        </header>
        <ul className={style.items}>
        {highlightData.map((highlight) => (
          createHighlight(highlight, highlight.id)
            ))} 
            
       </ul>
    </section>
    </FramerMotion>
    </>
  )
}
