import { useContext } from "react";
import style from "./Home.module.css";
import { ReservationContext, UserAuth } from "../../context/AppContext";
import Layout from "../../components/Layout";
import Hero from "../../components/Homepage/Hero/Hero";
import Highlights from "../../components/Homepage/Highlights/Highlights";
import Testimonials from "../../components/Homepage/Testimonials/Testimonials";
import Dining from "../../components/Homepage/Dining/Dining";
import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";

export default function Home() {
  const { resData } = useContext(ReservationContext);
  const { isUserLoggedIn } = useContext(UserAuth);
  const auth = getAuth();

  return (
    <>
      <Layout>
        {isUserLoggedIn && !resData ? (
          <motion.div
            className={style.welcomeUser}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >{`Welcome ${
            auth.currentUser.displayName
              ? auth.currentUser.displayName
              : auth.currentUser.email
          }`}</motion.div>
        ) : null}
        {resData ? (
          <h2 className={style.reservationSubmitted}>
            Hello {resData.Name}!<br />
            Your Reservation has been submitted and is being processed.
            <br />
            Feel free to countinue browsing!
          </h2>
        ) : null}
        <Hero />
        <Highlights />
        <Testimonials />
        <Dining />
      </Layout>
    </>
  );
}
