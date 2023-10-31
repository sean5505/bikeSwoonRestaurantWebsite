import { useContext } from "react";
import style from "./Home.module.css";
import {
  ReservationContext,
  ThemeContext,
  UserAuth,
} from "../../context/AppContext";
import Layout from "../../components/Layout";
import Hero from "../../components/Homepage/Hero/Hero";
import Highlights from "../../components/Homepage/Highlights/Highlights";
import Testimonials from "../../components/Homepage/Testimonials/Testimonials";
import Dining from "../../components/Homepage/Dining/Dining";
import { motion } from "framer-motion";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { resData } = useContext(ReservationContext);
  const { isUserLoggedIn } = useContext(UserAuth);

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
            auth.currentUser?.displayName
              ? auth.currentUser.displayName
              : auth.currentUser?.email
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
        <section
          className={style.highlights}
          style={{ backgroundColor: theme.secondaryColor }}
        >
          <header
            className={style.highlightsHead}
            style={{
              backgroundColor: theme.primaryColor,
              color: theme.secondaryColor,
            }}
          >
            <h1>Specials</h1>
            <Link to="/menu">
              <button className={style.highlightsHeadButton}>Order Now!</button>
            </Link>
          </header>
          <Highlights />
        </section>
        <section
          className={style.testimonials}
          style={{
            backgroundColor: theme.primaryColor,
            color: theme.secondaryColor,
          }}
        >
          <header className={style.testimonialsHead}>
            <h1>Testimonials</h1>
          </header>
          <Testimonials />
        </section>
        <Dining />
      </Layout>
    </>
  );
}
