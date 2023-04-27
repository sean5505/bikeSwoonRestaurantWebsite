import React, { useContext, useReducer, useState } from 'react';
import { ThemeContext } from '../../../ThemeContext';
import style from './About.module.css';
import FramerMotion from '../../../FramerMotion';

const imageSrc = 'assets/upperDining.jpeg';


export default function About() {
  const [state, dispatch] = useReducer(updateImg, { imageSrc });
  const { theme } = useContext(ThemeContext);
  const [isLowerActive, setIsLowerActive] = useState(false)
  const [isUpperActive, setIsUpperActive] = useState(true)

  
function updateImg(state, action) {
  switch (action.type) {
    case 'UPPERDINING':
      return { ...state, imageSrc: 'assets/upperDining.jpeg' };
    case 'LOWERDINING':
      return { ...state, imageSrc: 'assets/lowerDining.jpg' };
    default:
      return state;
  }
}

  const handleLowerClick = () => {
    setIsLowerActive(true);
    setIsUpperActive(false)
    dispatch({ type: 'LOWERDINING' });
  };

  const handleUpperClick = () => {
    setIsUpperActive(true);
    setIsLowerActive(false)
    dispatch({ type: 'UPPERDINING' });
  };

  


  return (
    <>
    <FramerMotion>
    <section
      className={style.aboutSection}
      style={{ backgroundColor: theme.secondaryColor, color: theme.primaryColor }}
    >
      <div className={style.leftContainer}>
        <h1 className={style.heading}>Our Dining Options</h1>
       
        <article className={style.description}>
          Welcome to BikeSwoon, the perfect destination for food lovers and anyone looking to
          indulge in a truly remarkable dining experience. Our mission is simple: to offer delicious,
          high-quality food in a warm and welcoming atmosphere.
          At BikeSwoon, we're proud to serve dishes that are made from scratch using only the
          freshest, locally-sourced ingredients. Our menu features a range of options to suit all tastes
          and preferences, from classic comfort food to bold, innovative dishes that push the boundaries
          of flavor.
          But we don't just pride ourselves on our food. We believe that dining out should be an
          experience, which is why we put just as much effort into creating an ambiance that's both
          inviting and intimate. From the decor to the lighting to the music, every detail has been
          carefully considered to create a truly unforgettable dining experience.
          So whether you're joining us for a romantic dinner for two, a family celebration, or simply
          a night out with friends, we promise to exceed your expectations and leave you with a lasting
          impression. Come and experience the magic of BikeSwoon for yourself - we can't wait
          to welcome you!
        </article>
      </div>
      <div className={style.rightContainer}>
        <img className={style.rightContainerImg} src={state.imageSrc} alt="dining image" />
        <div className={style.buttons}>
          <button onClick={handleUpperClick}
           style={{ backgroundColor: isUpperActive ? '#333333' : 'teal', color: isUpperActive ? '#fff' : '#000' }}>
            Upper Dining</button>
          
          <button onClick={handleLowerClick} 
           style={{ backgroundColor: isLowerActive ? '#333333' : 'teal', color: isLowerActive ? '#fff' : '#000' }}>
            Lower Dining</button>
          
        </div>
      </div>
    </section>
    </FramerMotion>
    </>
  );
}