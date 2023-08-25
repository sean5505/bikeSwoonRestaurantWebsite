import React, { useContext } from "react";
import style from "./Testimonials.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { testimonialData } from "./testimonialData";
import { Star } from "@mui/icons-material";
import Carousel from "../../Carousel";


const createTestimonial = (testimonial, key) => {
  return (
    <li className={style.review} key={key}>
      <img
        className={style.reviewImg}
        src={testimonial.img}
        alt={testimonial.name}
      />
      <h3 className={style.reviewName}>{testimonial.name}</h3>
      <h3 className={style.rating}>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </h3>
      <p className={style.description}>{testimonial.review}</p>
    </li>
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
