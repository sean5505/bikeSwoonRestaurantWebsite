import React, { useContext } from "react";
import { employeeData } from "./employeeData";
import style from "./employees.module.css";
import { ThemeContext } from "../../../context/AppContext";
import Carousel from "../../Carousel.jsx";

const createEmployee = (user, key) => {
  const { theme } = useContext(ThemeContext);
  return (
    <li
      key={key}
      className={style.employee}
      style={{
        backgroundColor: theme.primaryColor,
        color: theme.secondaryColor,
      }}
    >
      <img className={style.employeeImg} src={user.img} alt={user.name} />
      <h2 className={style.employeeName}>{user.name}</h2>
      <p className={style.employeeDesc}>{user.type}</p>
    </li>
  );
};

export default function Employees() {
  const { theme } = useContext(ThemeContext);
  return (
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
      <main>
        <Carousel>
          {employeeData.map((user) => createEmployee(user, user.id))}
        </Carousel>
      </main>
    </section>
  );
}
