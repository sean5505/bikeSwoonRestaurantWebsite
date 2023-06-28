import React from 'react'
import Employees from '../components/about/Employees'
import Owner from '../components/about/Owner'
import Promotional from '../components/about/Promotional'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
    <Layout>
    <Promotional/>
    <Owner/>
    <Employees/>
    </Layout>
  
    </>
  )
}
