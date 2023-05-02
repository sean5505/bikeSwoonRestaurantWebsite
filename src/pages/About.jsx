import React from 'react'
import Employees from '../components/Employees'
import Owner from '../components/Owner'
import Promotional from '../components/Promotional'
import Footer from '../components/Footer'
import Header from '../components/header/Header'


export default function About() {
  return (
    <>
    <Header/>
    <Promotional/>
    <Owner/>
    <Employees/>
    <Footer/>
    </>
  )
}
