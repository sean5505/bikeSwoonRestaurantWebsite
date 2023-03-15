import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Reservations from './pages/Reservations';
import BookingConfirmation from './pages/BookingConfirmation';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Order from './pages/Order';
import { ThemeContextProvider } from './ThemeContext';
import MyContext from './MyContext';
import { createContext, useState } from 'react';
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>



function App() {

  const [resData, setResData] = useState(false)


  
  /*const handleUserData = (newUser) => { //this is really ugly but it works \(-_-)/ tried to use contextApi but was missing something ...gonna implement the same functionality using redux in the future... FOXED WITH USECONTEXT I FIGURED OUT THE MISSING PIECE, I NEEDED TO CONSIDER THE APP COMPONENT AS THE PARENT
    setUserData(newUser);
  }*/

  return (
    <>
   <MyContext.Provider value = {{resData, setResData}} >
    <ThemeContextProvider>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
          <Route path='/reservations' element = {<Reservations/>}/>
          <Route path = '/bookingConfirmed' element = {<BookingConfirmation/>}/>
          <Route path = '/menu' element = {<Menu/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path ='order' element = {<Order/>} />
          <Route path = '/about' element = {<About/>}/>
      </Routes>
    </Router>
    </ThemeContextProvider>    
    </MyContext.Provider>
    </>
  );
}

export default App;
