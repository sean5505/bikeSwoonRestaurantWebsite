import  { useContext } from "react";
import style from "./Testimonials.module.css";
import { ThemeContext } from "../../../context/AppContext";
import { testimonialData } from "./testimonialData";
import { Star } from "@mui/icons-material";
import Carousel from "../../utils/Carousel/Carousel";
import { Testimonial } from "../../../types/types";


const createTestimonial = (testimonial: Testimonial, key: number) => {
  return (
    <div className={style.review} key={key}>
      <img
        className={style.reviewImg}
        src={testimonial.img}
        alt={testimonial.name}
      />
      <h3 className={style.reviewName}>{testimonial.name}</h3>
      <span className={style.rating}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </span>
      <p className={style.description}>{testimonial.review}</p>
    </div>
  );
};

export default function Testimonials() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={style.testimonials}
      style={{
        backgroundColor: theme.primaryColor,
        color: theme.secondaryColor,
      }}
    >
      <h1 className={style.header}>Testimonials</h1>
      <Carousel>
        {testimonialData.map((testimonial) =>
          createTestimonial(testimonial, testimonial.id)
        )}
      </Carousel>
    </section>
  );
}
