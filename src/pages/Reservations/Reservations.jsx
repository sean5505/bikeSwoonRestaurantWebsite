import { useContext, useEffect } from "react";
import { useReducer, useState } from "react";

import { fetchAPI, submitAPI } from "./reservationData";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import style from "./Reservations.module.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import { ReservationContext } from "../../context/AppContext";
import { toast } from "react-toastify";

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
  const { resData, setResData } = useContext(ReservationContext);

  function submitForm(formData) {
    console.log(formData);
    submitAPI(formData);
    setIsFormSubmitted(true);
  }
  const navigate = useNavigate();

  useEffect(() => {
    if (isFormSubmitted && submitForm) {
      navigate("/bookingConfirmed");
    }
  }, [isFormSubmitted]);

  useEffect(() => {
    localStorage.setItem('reservation', JSON.stringify(resData))
  }, [resData])

  return (
    <>
      <Layout>
        {!resData ? (
          <>
            <section className={style.container}>
              <header className={style.bookingInfo}>
                <h1>BikeSwoon</h1>
                <h5>Fill Out The Form And Submit Your Reservation!</h5>
              </header>

              <div className={style.bookingForm}>
                <BookingForm
                  availableTimes={availableTimes}
                  dispatch={dispatch}
                  submitForm={submitForm}
                />
              </div>
            </section>
          </>
        ) : (
          <section className={style.ReservationSubmitted}>
            <h2>
              Hello {resData.Name}! <br />
              Your Reservation Has Already Been Submitted <br /> Click Here To
              Submit A New Reservation
            </h2>
            <button
              onClick={() => {
                setResData(false);
                toast("Booking Form Has Been Reset");
              }}
            >
              Submit A New Reservation
            </button>
          </section>
        )}
      </Layout>
    </>
  );
}
