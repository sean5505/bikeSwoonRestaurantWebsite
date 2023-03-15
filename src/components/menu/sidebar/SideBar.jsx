import React, { useContext, useEffect, useState } from 'react'
import './sideBar.css'
import { ThemeContext } from '../../../ThemeContext'
import {Tapas} from '@mui/icons-material';




export default function SideBar(props) {
    const {theme} = useContext(ThemeContext)
    const [text, setText] = useState('text for testing')



  return (
     <section className='menuSideBar' style={{backgroundColor: theme.tertiaryColor}}>
     <ul className='mealOptions'>
        <li className="mealOption">
        <label htmlFor="main">Main <Tapas className = 'sideBarIcon'/>
        <input type="radio" name="option" id ='main' value="main" />
        </label>
        </li>
        <li className="mealOption">
        <label htmlFor="appetizer">Appetizers
        <input type="radio" name="option" id='appetizer' value="appetizer"/>
        </label>
        </li>
        <li className="mealOption">
        <label htmlFor="specials">Specials
        <input type="radio" name="option" id='specials' value = "specials"/>
        </label>
        </li>
        <button onClick={(e) => setText('Main')}>test button</button>
        <h2>{text}</h2>

     </ul>
    </section>
  )
}
