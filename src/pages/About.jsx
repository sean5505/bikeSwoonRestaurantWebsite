import React from 'react'
import Employees from '../components/about/ourEmployees/Employees'
import Owner from '../components/about/owner/Owner'
import Promotional from '../components/about/promotional/Promotional'
import Footer from '../components/footer/Footer'
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
