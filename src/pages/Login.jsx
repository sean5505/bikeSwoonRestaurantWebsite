import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import LoginForm from '../components/loginForm/LoginForm'
import FramerMotion from '../FramerMotion'

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
