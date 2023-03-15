import React, { useContext } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import MyContext from '../MyContext'
import { ThemeContext } from '../ThemeContext'


export default function Home() {
  const {resData} = useContext(MyContext)
  const {theme} = useContext(ThemeContext)
  return (
    <>
        <Header/>
        {resData? ( 
        <h2 style={{textAlign: 'center', backgroundColor: theme.primaryColor, color: theme.secondaryColor, height:'100%', margin: '0px', padding: '30px '}}>
          Hello {resData.name}!<br/>
          Your Reservation has been submitted and is being processed.<br/>
           Feel free to countinue browsing!</h2>)
            : ''}
        <Main/>
        <Footer />
     </>
  )
}
