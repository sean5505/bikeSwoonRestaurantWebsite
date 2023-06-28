import { useContext } from "react";
import MyContext from "../components/context/MyContext";
import { ThemeContext } from "../components/context/ThemeContext";
import Layout from "../components/Layout";
import Hero from "../components/Homepage/Hero";
import Highlights from "../components/Homepage/Highlights";
import Testimonials from "../components/Homepage/Testimonials";
import Dining from "../components/Homepage/Dining";

export default function Home() {
  const { resData } = useContext(MyContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Layout>
        {resData && (
          <h2
            style={{
              textAlign: "center",
              backgroundColor: theme.primaryColor,
              color: theme.secondaryColor,
              margin: "0px",
              padding: "2rem ",
              border: `4px solid ${theme.secondaryColor}`,
            }}
          >
            Hello {resData.name}!<br />
            Your Reservation has been submitted and is being processed.
            <br />
            Feel free to countinue browsing!
          </h2>
        )}
        <Hero />
        <Highlights />
        <Testimonials />
        <Dining />
      </Layout>
    </>
  );
}
