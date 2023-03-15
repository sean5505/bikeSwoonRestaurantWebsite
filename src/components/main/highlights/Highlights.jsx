import React, { useContext } from 'react'
import "./Highlights.css"
import {Highlightss} from './highlightData'
import Highlight from './Highlight'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../../../ThemeContext'

export default function Highlights() {
  const {theme} = useContext(ThemeContext)
  return (
    <section className='highlights' style = {{backgroundColor: theme.secondaryColor}} >
        <header className='highlightsHead' style = {{backgroundColor:theme.primaryColor, color: theme.secondaryColor}}>
          <div className="sectionHead">
            <h1>Specials</h1>
            </div>
            <div className='orderButton'>
            <Link to='/menu'>
            <button className='highlightsHeadButton'>Order Now!</button>
            </Link>
            </div>
        </header>
        <div className="items">
        {Highlightss.map((highlight) => (
               <Highlight key = {highlight.id} highlight ={highlight} />
            ))} 
            
       </div>
    </section>
  )
}
