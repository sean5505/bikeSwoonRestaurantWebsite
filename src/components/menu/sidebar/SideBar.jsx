import React, { useContext, useEffect, useState } from 'react'
import style from './sideBar.module.css'
import { ThemeContext } from '../../../ThemeContext'
import {Tapas} from '@mui/icons-material';




export default function SideBar(props) {
    const {theme} = useContext(ThemeContext)
    const [text, setText] = useState('text for testing')



  return (
    <>
     <section className={style.menuSideBar} style={{backgroundColor: theme.tertiaryColor}}>
     <ul className={style.mealOptions}>
        <li className={style.mealOption}>
        <label htmlFor="main">Main <Tapas className = {style.sideBarIcon}/>
        <input type="radio" name="option" id ='main' value="main" />
        </label>
        </li>
        <li className={style.mealOption}>
        <label htmlFor="appetizer">Appetizers
        <input type="radio" name="option" id='appetizer' value="appetizer"/>
        </label>
        </li>
        <li className={style.mealOption}>
        <label htmlFor="specials">Specials
        <input type="radio" name="option" id='specials' value = "specials"/>
        </label>
        </li>
        <button onClick={(e) => setText('Main')}>test button</button>
        <h2>{text}</h2>

     </ul>
    </section>
    </>
  )
}
