import  { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function ReservationConfirmed({ resData } : any) {
  const [showButton, setShowButton] = useState<boolean>(false);

  return (
    <>
      <Typewriter
        options={{
          delay: 25,
          cursor: " ",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`Hello, ${resData.Name}!<br/>`)
            .pauseFor(750)
            .typeString(
              `Your Reservation for ${resData.Date} @ ${resData.Time} has been successfully submitted!<br/>`
            )
            .pauseFor(750)
            .typeString(
              `You will receive an email confirmation shortly at <br/>
                      ${resData.Email} <br/>`
            )
            .pauseFor(750)
            .typeString(`Click the button below to return to the Homepage<br/>`)
            .pauseFor(750)
            .callFunction(() => {
              setShowButton(true);
            })
            .start();
        }}
      />
      {showButton ? (
        <Link to="/">
          <button>Home</button>
        </Link>
      ) : null}
    </>
  );
}
