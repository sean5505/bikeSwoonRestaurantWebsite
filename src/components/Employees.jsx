import React, { useContext } from 'react'
import {employeeData} from "../data/employeeData.js"

import style from '../styles/employees.module.css'
import { ThemeContext } from './context/ThemeContext.jsx'
import FramerMotion from './FramerMotion.jsx'

const createEmployee = (user, key) =>{
  const {theme} = useContext(ThemeContext)
  return (
    <FramerMotion key = {key}>
    <li className={style.employee} style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}}>
    <img className={style.employeeImg} src={user.img} alt= {user.name}  />
    <h2 className={style.employeeName}>{user.name}</h2>
    <p className={style.employeeDesc}>{user.type}</p>
    </li>
    </FramerMotion>
  )
}

export default function Employees() {
  const {theme} = useContext(ThemeContext)
  return (
    <FramerMotion>
    <section className= {style.employees} style={{backgroundColor: theme.secondaryColor}}>
        <header className={style.employeesHead}>
            <h1>Our Employees</h1>
            <h4>Here is some information about our talented staff who will be serving you!</h4>
        </header>
        <ul className={style.employeeList} >
            {employeeData.map((user) => (
               createEmployee(user, user.id)
            ))} 
        
        </ul>
        
       
    </section>
    </FramerMotion>
  )
}
