import React, { useEffect } from 'react'
import { useReducer, useState} from 'react'
import BookingForm from '../components/BookingForm'
import Header from '../components/header/Header'
import { fetchAPI, submitAPI } from '../data/apiData'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import FramerMotion from '../components/FramerMotion'


function updateTimes(state, action){ // reducer function
  switch (action.type) {
    case 'UPDATE_TIMES' :
      const selectedDate = action.payload
      state = initializeTimes(selectedDate)
      return state;
    default:
      return state;
    }
  }

 export function initializeTimes(a){ //export to use in app test// initialState
  const currentDate = new Date(a)
    if(a){
      const initialTimesforSelectedDate = fetchAPI(currentDate)
       return (initialTimesforSelectedDate)
    }
  }

export default function Reservations() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function submitForm(formData) {
    submitAPI(formData)
    setIsFormSubmitted(true)
   
  }
 const navigate = useNavigate();
 

  useEffect(() => {
    if(isFormSubmitted && submitForm){
      navigate('/bookingConfirmed')
    }
  }, [isFormSubmitted])
  
  //console.log(`dispatch is ${dispatch}`)
 
  return (
    <>
      <Header/>  
      <FramerMotion>
     <BookingForm availableTimes={availableTimes} dispatch = {dispatch} submitForm = {submitForm}  />
     </FramerMotion>
     <Footer/>
    </>
  )
  }

