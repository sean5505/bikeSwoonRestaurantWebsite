import React from 'react'
import Header from './header/Header'
import Footer from './Footer'
import InView from './InView'

export default function Layout({children}) {
  return (
    <>
    <Header/>
    <InView>
    <main>{children}</main>
    </InView>
    <Footer/>
    </>
  )
}
