import Carousel from "../../utils/Carousel/Carousel";
import FetchAndFilterFromDB from "../../utils/FetchAndFilterFromDB";
import CreateHighlight from "./CreateHighlight";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";
import { DocumentData } from "firebase/firestore";
import style from "./Highlights.module.css"

export default function Highlights() {
  const { isPending, error, data } = useQuery<DocumentData[] | undefined>({
    queryKey: ["highlightData"],
    queryFn: () => getData(),
  });

  if (isPending) return <LoadingSpinner />;

  if (error) return "An error has occurred: " + error.message;

  async function getData() {
    try {
      const dataFromFireStore = await FetchAndFilterFromDB(
        "menuItems",
        "type",
        "Specials"
      );
      if (dataFromFireStore.length === 0) {
        throw new Error("Highlight data could not be found");
      } else return dataFromFireStore;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <>
      <main className={style.highlightsContainer}>
        <Carousel>
          {data?.map((highlight) => (
            <CreateHighlight highlight={highlight} key={highlight.id} />
          ))}
        </Carousel>
      </main>
    </>
  );
}
