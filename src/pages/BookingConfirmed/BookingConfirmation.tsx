import  { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import style from "./BookingConfirmation.module.css";
import ReservationConfirmed from "../../components/ReservationConfirmed";
import { ReservationContext, ThemeContext } from "../../context/AppContext";

export default function BookingConfirmation() {
  const { theme } = useContext(ThemeContext);
  const { resData } = useContext(ReservationContext);

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
            <ReservationConfirmed resData={resData} />
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
