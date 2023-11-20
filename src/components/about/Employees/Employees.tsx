import style from "./employees.module.css";
import Carousel from "../../utils/Carousel/Carousel";
import FetchFromDB from "../../utils/FetchFromDB";
import { DocumentData } from "firebase/firestore";
import CreateEmployee from "./CreateEmployee";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";

export default function Employees() {
  const { isPending, error, data } = useQuery<DocumentData[] | undefined>({
    queryKey: ["employeesData"],
    queryFn: () => getData(),
  });

  if (isPending) return <LoadingSpinner />;

  if (error) return "An error has occurred: " + error.message;
  async function getData() {
    try {
      const dataFromFireStore = await FetchFromDB("employees");
      if (dataFromFireStore.length === 0) {
        throw new Error("Employee data could not be found");
      } else return dataFromFireStore;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <main className={style.employeeContainer}>
      <Carousel>
        {data?.map((employee) => (
          <CreateEmployee employee={employee} key={employee.id} />
        ))}
      </Carousel>
    </main>
  );
}
