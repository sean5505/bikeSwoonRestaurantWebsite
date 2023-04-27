import React, { useContext } from 'react'
import { ThemeContext } from '../../../ThemeContext'
import style from './employees.module.css'
import FramerMotion from '../../../FramerMotion'

export default function Employee(props) {
  const {theme} = useContext(ThemeContext)
  return (
    <FramerMotion>
    <li className={style.employee} style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}}>
    <img className={style.employeeImg} src={props.user.img} alt=""  />
    <h2 className={style.employeeName}>{props.user.name}</h2>
    <p className={style.employeeDesc}>{props.user.type}</p>
    </li>
    </FramerMotion>
  )
}
