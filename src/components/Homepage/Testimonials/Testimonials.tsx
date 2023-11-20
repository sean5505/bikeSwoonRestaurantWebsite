import style from "./Testimonials.module.css";
import CreateTestimonial from "./CreateTestimonial";
import Carousel from "../../utils/Carousel/Carousel";
import { DocumentData } from "firebase/firestore";
import FetchFromDB from "../../utils/FetchFromDB";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";

export default function Testimonials() {


  const { isPending, error, data } = useQuery<DocumentData[] | undefined>({
    queryKey: ["testimonialData"],
    queryFn: () => getData(),
  });

  if (isPending) return <LoadingSpinner />;

  if (error) return "An error has occurred: " + error.message;

  async function getData() {
    try {
      const dataFromFireStore = await FetchFromDB("testimonials");
    
      if (dataFromFireStore.length === 0) {
        throw new Error("Testimonial Data could not be found");
      } else return dataFromFireStore;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const testimonialItems = data?.map((item, index) => (
    <CreateTestimonial item={item} key={index} />
  ));

  return (
    <main className={style.testimonialsContainer}>
      <Carousel>{testimonialItems}</Carousel>
    </main>
  );
}
