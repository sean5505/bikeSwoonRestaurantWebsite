import React, { useContext } from 'react'
import style from "./Highlights.module.css"
import {Highlightss} from './highlightData'
import Highlight from './Highlight'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../../ThemeContext'
import FramerMotion from '../../../FramerMotion'

export default function Highlights() {
  const {theme = {}} = useContext(ThemeContext)
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
        {Highlightss.map((highlight) => (
               <Highlight key = {highlight.id} highlight ={highlight} />
            ))} 
            
       </ul>
    </section>
    </FramerMotion>
    </>
  )
}
