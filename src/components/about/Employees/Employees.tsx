import  { useContext } from "react";
import { employeeData } from "./employeeData";
import style from "./employees.module.css";
import { ThemeContext } from "../../../context/AppContext";
import Carousel from "../../utils/Carousel/Carousel";
import { Employee } from "../../../types/types";

const createEmployee = (employee : Employee, key: number) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      key={key}
      className={style.employee}
      style={{
        backgroundColor: theme.primaryColor,
        color: theme.secondaryColor,
      }}
    >
      <img className={style.employeeImg} src={employee.img} alt={employee.name} />
      <h2 className={style.employeeName}>{employee.name}</h2>
      <p className={style.employeeDesc}>{employee.type}</p>
    </div>
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
          {employeeData.map((employee) => createEmployee(employee, employee.id))}
        </Carousel>
      </main>
    </section>
  );
}
