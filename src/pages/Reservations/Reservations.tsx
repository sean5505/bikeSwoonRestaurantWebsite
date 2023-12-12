import { useContext } from "react";
import { useReducer } from "react";

import { fetchAPI, submitAPI } from "./reservationData.js";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import style from "./Reservations.module.css";
import BookingForm from "../../components/Forms/BookingForm/BookingForm.js";
import { ReservationContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";

function updateTimes(
  state: string[] | undefined,
  action: PayloadAction<string[]>
) {
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

function initializeTimes(a: any) {
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

  const { resData, setResData } = useContext(ReservationContext);

  function submitForm(formData: string[]) {
    submitAPI(formData);
    navigate("/bookingConfirmed");
  }
  const navigate = useNavigate();

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
                localStorage.setItem("reservation", "");
                toast.success("Booking Form Has Been Reset");
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
