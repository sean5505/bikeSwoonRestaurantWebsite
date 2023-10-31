import { useContext } from "react";
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
          <ReservationConfirmed resData={resData} />
        </div>
      </Layout>
    </>
  );
}
