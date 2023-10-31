import Layout from "../../components/Layout";
import Promotional from "../../components/about/Promotional/Promotional";
import Owner from "../../components/about/Owner/Owner";
import Employees from "../../components/about/Employees/Employees";
import { useContext } from "react";
import { ThemeContext } from "../../context/AppContext";
import style from "./About.module.css"

export default function About() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <Layout>
        <Promotional />
        <Owner />
        <section
      className={style.employees}
      style={{ backgroundColor: theme.secondaryColor }}
    >
      <header className={style.employeesHead}>
        <h1>Our Employees</h1>
        <h4>
          Here is some information about our talented staff who will be serving
          you!
        </h4>
      </header>
        <Employees />
        </section>
      </Layout>
    </>
  );
}
