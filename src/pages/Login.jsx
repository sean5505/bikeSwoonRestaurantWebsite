import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import LoginForm from '../components/LoginForm'
import FramerMotion from '../components/FramerMotion'

export default function Login() {
  return (
    <>
    <Header/>
    <FramerMotion>
    <LoginForm/>
    </FramerMotion>
    <Footer/>
    
    </>
  )
}
