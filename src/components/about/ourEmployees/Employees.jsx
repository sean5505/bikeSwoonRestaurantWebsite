import React, { useContext } from 'react'
import './employees.css'
import {Users  } from "./employeeData.js"
import Employee from './Employee'
import { ThemeContext } from '../../../ThemeContext'

export default function Employees() {
  const {theme} = useContext(ThemeContext)
  return (
    <section className= 'employees' style={{backgroundColor: theme.secondaryColor}}>
        <header className='employeesHead'>
            <h1>Our Employees</h1>
            <h4>Here is some information about our talented staff who will be serving you!</h4>
        </header>
        <ul className='employeeList' >
            {Users.map((user) => (
               <Employee key = {user.id} user ={user} />
            ))} 
        
        </ul>
        
       
    </section>
  )
}
