import React from 'react'
import Header from './header/Header/Header'

import InView from './InView'
import Footer from './Footer/Footer'

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
