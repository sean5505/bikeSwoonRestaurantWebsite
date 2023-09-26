import React, { useContext, useEffect } from "react";
import style from "./BookingForm.module.css";
import {  ReservationContext } from "../../context/AppContext";
import { getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";

export default function BookingForm(props) {
  const { setResData } = useContext(ReservationContext);

  const auth = getAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      Name: auth.currentUser? auth.currentUser.displayName : "",
      Email: auth.currentUser ? auth.currentUser.email : " ",
      Date: "",
      Time: "",
      Guests: 1,
      Dining: "",
    },
  });



  const dateValue = watch("Date", "");

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    const action = { type: "UPDATE_TIMES", payload: selectedDate };
    props.dispatch(action);
  }

  function onSubmit(data) {
    console.log(data);
    props.submitForm(data);
    setResData(data);
    closeModal();
  }

  
  return (
    <>
      <form className={style.bookingForm} onSubmit={handleSubmit(onSubmit)}>
        <>
          <label htmlFor="res-name">Name</label>
          <input
            {...register("Name", {
              required: { value: true, message: "Required" },
              minLength: {
                value: 6,
                message:
                  "Please add at least 6 characters for Name Identification",
              },
            })}
            type="text"
            id="res-name"
            data-testid="name-test"
            className={errors.Name ? style.invalid : ""}
          />
          {errors.Name ? (
            <span className={style.error}>{errors.Name?.message}</span>
          ) : null}
        </>

        <>
          <label htmlFor="res-email"> Email</label>
          <input
            {...register("Email", {
              required: { value: true, message: "Required" },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid Email Format",
              },
            })}
            type="text"
            id="res-email"
            className={errors.Email ? style.invalid : ""}
            data-testid="email-test"
          />
          {errors.Email ? (
            <span className={style.error}>{errors.Email?.message}</span>
          ) : null}
        </>

        <>
          <label htmlFor="res-date">Date</label>
          <input
            {...register("Date", {
              required: { value: true, message: "Required" },
              onChange: (e) => {
                handleDateChange(e);
                console.log("changed occured");
              },
            })}
            type="date"
            id="res-date"
            data-testid="date-test"
            className={errors.Date ? style.invalid : ""}
          />
          {errors.Date ? (
            <span className={style.error}>{errors.Date?.message}</span>
          ) : null}
        </>

        <>
          <label htmlFor="res-time">Time</label>
          <select
            {...register("Time", {
              required: { value: true, message: "Required" },
              disabled: dateValue === "",
            })}
            id="res-time "
            data-testid="time-test"
          >
            {props.availableTimes &&
              props.availableTimes.map((time) => (
                <option key={time}>{time}</option>
              ))}
          </select>
        </>

        <>
          <label htmlFor="res-guests">Number of guests</label>
          <input
            {...register("Guests", {})}
            type="number"
            placeholder={1}
            min={0}
            max={4}
            id="res-guests"
            data-testid="guests-test"
          />
        </>

        <>
          <label htmlFor="res-dining">Dining Options</label>
          <select
            {...register("Dining", {
              required: { value: true, message: "Required" },
            })}
            id="res-dining"
            data-testid="dining-test"
            className={errors.Dining ? style.invalid : ""}
          >
            <option>Upper</option>
            <option>Lower</option>
            <option>Take Out</option>
          </select>
          {errors.Dining ? (
            <span className={style.error}>{errors.Dining?.message}</span>
          ) : null}
        </>

        <input
          className={style.formSubmitButton}
          type="submit"
          data-testid="button-test"
          value="Make Your reservation"
          aria-label="On Click"
        />
      </form>
      
    </>
  );
}
