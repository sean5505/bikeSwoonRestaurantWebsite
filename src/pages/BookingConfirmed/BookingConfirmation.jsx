import React, { useContext} from "react";
import { Link } from "react-router-dom";
import MyContext from "../../components/context/MyContext";
import { ThemeContext } from "../../components/context/ThemeContext";
import Layout from "../../components/Layout";
import ResSubmission from "../../components/ResSubmission";
import style from "./BookingConfirmation.module.css"

export default function BookingConfirmation() {
  const { theme } = useContext(ThemeContext);
  const { resData } = useContext(MyContext);

  //console.log(`resData submiteed by reservation is ${resData.name}`)
  return (
    <>
      <Layout>
        <div
          className={style.reservationConfirmed}
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.secondaryColor,
          }}
        >
          {resData ? (
            <ResSubmission resData={resData} />
          ) : (
            <>
              <p>Click the button below to submit a reservation!</p>
              <Link to="/reservations">
                <button>Go</button>
              </Link>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}
