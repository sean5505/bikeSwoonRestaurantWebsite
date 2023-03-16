import React, { useContext, useEffect, useReducer, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./BookingForm.css";
import MyContext from "../../MyContext";



const initialState = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: 1,
  dining: "",
  isNameValid: true,
  isEmailValid: true,
};


function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload, isNameValid: action.payload.length >= 3 };
    case "SET_EMAIL":
      return { ...state, email: action.payload, isEmailValid: validateEmail(action.payload) };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_TIME":
      return { ...state, time: action.payload };
    case "SET_GUESTS":
      return { ...state, guests: action.payload };
    case "SET_DINING":
      return { ...state, dining: action.payload };
    default:
      return state;
  }
}

function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

export default function BookingForm(props) {

  //const contextValue = useContext(ThemeContext)
 // const { theme } = contextValue || {};
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue2 = useContext(MyContext)
  const {resData, setResData} = contextValue2 || {}
  console.log(`value of resData is ${resData}`)

  const userData = {
    name: state.name,
    email: state.email,
    date: state.date,
    time: state.time,
    guests: state.guests,
    dining: state.dining
  }
  console.log(typeof props.dispatch)

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch({ type: "SET_DATE", payload: selectedDate });
    const action = { type: "UPDATE_TIMES", payload: selectedDate };
    props.dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(userData);
    setResData(userData)
  };


  return (
    <>

      <div className="container">
        <div className="bookingForm" >
          <form style={{ display: "grid", maxWidth: 200, gap: 20 }} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              data-testid = 'name-test'
              className={state.isNameValid ? "" : "invalid"}
              value={state.name}
              onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
              placeholder="My name is..."
              required
              minLength={3}
            />

            <label htmlFor="res-email"> Email</label>
            <input
              type="email"
              id="res-email"
              className={state.isEmailValid ? "" : "invalid"}
              data-testid = 'email-test'
              value={state.email}
              onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
              placeholder="Contact Me @"
              required
            />

            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date"data-testid = 'date-test' value={state.date} required onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={state.time} data-testid = 'time-test' onChange={(e) => dispatch({ type: "SET_TIME", payload: e.target.value })} disabled={state.date === ""}>
              {props.availableTimes &&
                props.availableTimes.map((time) => (
                  <option key={time}>{time}</option>
                  ))}
                  </select>
              
              
                  <label htmlFor="guests">Number of guests</label>
                  <input
                      type="number"
                      placeholder= {1}
                      min= {1}
                      max= {4}
                      id="guests"
                      data-testid = 'guests-test'
                      value = {state.guests}
                      onChange ={(e) => dispatch({type: 'SET_GUESTS', payload:e.target.value})}
                      />
              
              
                  <label htmlFor="dining">Dining Options</label>
                  <select
                      id="dining"
                      data-testid = 'dining-test'
                      value = {state.dining}
                      onChange = {(e) => dispatch({type: 'SET_DINING', payload:e.target.value})}
                      >
                    <option>Upper</option>
                    <option>Lower</option>
                    <option>Take Out</option>
                  </select>
                      <input className="formSubmitButton" type="submit"   data-testid = 'button-test' value="Make Your reservation" aria-label="On Click" />
                </form>
                  </div>
                  <div className="bookingRight">
                          <h3 className="bookingLogo">BikeSwoon</h3>
                          <h5>CHOOSE AN AVAILABLE TIME SLOT AND SUBMIT YOUR RESERVATION!</h5>
                      </div>
                   
                  </div>
                  
                  </>
                   
                )
               
              }
              
              
              
