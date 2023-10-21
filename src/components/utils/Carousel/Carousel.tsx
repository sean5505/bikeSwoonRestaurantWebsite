import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Carousel.module.css";

const settings = {
  infinite: true,
  arrows: true,
  cssEase: "linear",
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function Carousel(props: Props) {
  return (
    <div className={style.container}>
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
}
