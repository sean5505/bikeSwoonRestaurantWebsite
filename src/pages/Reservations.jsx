import { useEffect } from "react";
import { useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../data/apiData";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import style from "../styles/pages/Reservations.module.css"

function updateTimes(state, action) {
  // reducer function
  switch (action.type) {
    case "UPDATE_TIMES":
      const selectedDate = action.payload;
      state = initializeTimes(selectedDate);
      return state;
    default:
      return state;
  }
}

export function initializeTimes(a) {
  //export to use in app test// initialState
  const currentDate = new Date(a);
  if (a) {
    const initialTimesforSelectedDate = fetchAPI(currentDate);
    return initialTimesforSelectedDate;
  }
}

export default function Reservations() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function submitForm(formData) {
    submitAPI(formData);
    setIsFormSubmitted(true);
  }
  const navigate = useNavigate();

  useEffect(() => {
    if (isFormSubmitted && submitForm) {
      navigate("/bookingConfirmed");
    }
  }, [isFormSubmitted]);

  //console.log(`dispatch is ${dispatch}`)

  return (
    <>
      <Layout>
        <div className={style.container}>
          <header className={style.bookingInfo}>
            <h1>BikeSwoon</h1>
            <h5>Fill Out The Form Below And Submit Your Reservation!</h5>
          </header>
          <div className={style.bookingForm}>
            <BookingForm
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
