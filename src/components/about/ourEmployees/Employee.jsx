import React, { useContext } from 'react'
import { ThemeContext } from '../../../ThemeContext'
import './employees.css'

export default function Employee(props) {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="employee" style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}}>
    <img className='employeeImg' src={props.user.img} alt=""  />
    <h2 className='employeeName'>{props.user.name}</h2>
    <p className='employeeDesc'>{props.user.type}</p>
    </div>
  )
}
