import React, { useState } from "react";
import style from "./Carousel.module.css";

type Props = {
  count: number;
  children: React.ReactNode;
};

export default function Carousel(props: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [length, setLength] = useState<number>(props.count);

  function nextItem() {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
      setLength(props.count);
    }
  }

  function previousItem() {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
      setLength(props.count);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {currentIndex > 0 && (
          <button className={style.leftArrow} onClick={() => previousItem()}>
            &lt;
          </button>
        )}
        <div className={style.contentWrapper}>
          <div
            className={style.content}
            style={{ transform: `translateX(-${currentIndex * 100.3}%)` }}
          >
            {props.children}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button className={style.rightArrow} onClick={() => nextItem()}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}
