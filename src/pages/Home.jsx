import React, { useContext } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import MyContext from '../MyContext'
import { ThemeContext } from '../ThemeContext'
import {useInView} from 'react-intersection-observer'
import FramerMotion from '../FramerMotion'


export default function Home() {
  const {resData} = useContext(MyContext)
  const {theme} = useContext(ThemeContext)

  return (
    <>
        <Header/>
        <FramerMotion>
        {resData? ( 
        <h2 className='submissionText' style={{textAlign: 'center', backgroundColor: theme.primaryColor, color: theme.secondaryColor,  margin: '0px', padding: '30px ', border: `4px solid ${theme.secondaryColor}`}}>
          Hello {resData.name}!<br/>
          Your Reservation has been submitted and is being processed.<br/>
           Feel free to countinue browsing!</h2>)
            : ''}
            </FramerMotion>
        <Main/>
    
        <Footer />
     </>
  )
}
