import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  arrows: true,
  cssEase: "linear",
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

export default function Carousel({ children }) {
  return (
    <ul
      style={{
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Slider style={{ height: "100%", flex: "1" }} {...settings}>
        {children}
      </Slider>
    </ul>
  );
}
