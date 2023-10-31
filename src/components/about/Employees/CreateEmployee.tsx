import  { useContext } from 'react'
import { ThemeContext } from '../../../context/AppContext';
import style from './employees.module.css'
import { DocumentData } from 'firebase/firestore';


type Props = {
  employee: DocumentData
  key: number
}
function CreateEmployee(props: Props){
    const { theme } = useContext(ThemeContext);
    return (
      <li
        key={props.key}
        className={style.employee}
        style={{ backgroundColor: theme.secondaryColor }}
        >
        <img className={style.employeeImg} src={props.employee.img} alt={props.employee.name} />
        <h2 className={style.employeeName}>{props.employee.name}</h2>
        <p className={style.employeeDesc}>{props.employee.role} Chef</p>
      </li>
    );
  };
      

export default CreateEmployee