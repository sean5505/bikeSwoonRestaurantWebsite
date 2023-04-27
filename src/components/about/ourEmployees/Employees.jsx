import React, { useContext } from 'react'
import {Users  } from "./employeeData.js"
import Employee from './Employee'
import style from './employees.module.css'
import { ThemeContext } from '../../../ThemeContext'
import FramerMotion from '../../../FramerMotion'

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
            {Users.map((user) => (
               <Employee key = {user.id} user ={user} />
            ))} 
        
        </ul>
        
       
    </section>
    </FramerMotion>
  )
}
