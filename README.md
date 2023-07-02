<a target="_blank" href="https://sean5505bikeswoon.netlify.app/"> <img src="public/assets/logo.jpg" align="right" height="60" />
</a>

# BikeSwoon

<p align="center">A fictional web application for BikeSwoon that acts as a user-friendly front-end interface, providing customers with a virtual brochure showcasing what BikeSwoon has to offer.</p>

<p align="center"> <a target="_blank" href="https://sean5505bikeswoon.netlify.app/"> Live Demo </a> </p>

---
## Table Of Contents
  - [Overview](#overview)
  - [Development](#development)
  - [Challenges](#challenges)
  - [Conclusion](#conclusion)
  - [Future Plans](#future-plans)
---

## Overview

A user-friendly, interactive web application that serves as a front-end interface for BikeSwoon, enabling customers to effortlessly view a psuedo brocheure. It provides users the ability to conveniently add their desired items to a virtual cart, allowing a seamless ordering experience. Additionally, the application offers the convenience of advance reservation submission, allowing customers to secure their dining plans ahead of time with ease.

![Website Image](public/assets/bikeSwoonIntro.png) 

### Technologies
- Vite
- React
- Javascript
- Css Modules
- Redux

## Development

Originally, this project was undertaken as a capstone project within the context of a course in which I was enrolled. The project specifications entailed the creation of a homepage featuring navigation links, as well as a reservation page designed to enable users to input personal information through a form. Upon submission, users would be directed to a booking confirmation page. I created an interactive [Prototype](public/assets/bikeSwoonInitialDesign.pdf) in Figma to serve as a visual representation of the project requirements. Following the completion of the initial assignment, I aspired to elevate the project to the status of a comprehensive capstone endeavor, wherein I could fully employ and demonstrate the proficiency acquired throughout my learning experience.

#### **Tech stack**

According to the initial assignment specifications, I implemented the application using `React`. To optimize the development process and achieve faster startup times, I opted for `Vite` as the build tool, leveraging its efficient development server capabilities. For effective state management in the shopping cart functionality, I utilized `Redux`, ensuring seamless viability. To enhance code maintainability during iterative development and minimize class name conflicts, I employed `Module-Based CSS Files`.

## Challenges

##### **Migration To Vite**

This project was originally developed using CRA (Create React App). However, as I stayed updated with the latest trends in the development community, I came to the realization that CRA was no longer the most optimal choice for building a React application. Therefore, I made the decision to adopt Vite as my preferred build tool due to its reputation for being a faster alternative.

While working on this project, I did not fully exploit the extensive capabilities offered by Vite. My primary intention was to leverage a more modern build tool to construct my website. Despite this, the migration process proved to be successful. Nevertheless, I encountered an issue with testing functionality, which is currently not operational.

Moving forward, my plan is to implement testing using vitest in the near future, aiming to address this limitation and enhance the overall robustness of the project.

## Conclusion

In conclusion, this project served as a valuable platform for me to apply and validate the Front-End techniques I acquired throughout my course enrollment. It not only allowed me to solidify my existing knowledge but also served as a catalyst for further exploration and learning in the field. By engaging in this project, I was able to broaden my skillset and gain hands-on experience, ultimately paving the way for continuous growth and advancement.

---
## Future Plans
- Cart Functionality: fix order total display upon item quantity changes
- Implement at least 1 Unit Test for primary components
- Replace dependicies such as React-Slider with original code
- Migrate to React-Hook-Form in the bookingForm component
- Migrate from JSX to typescript, css to scss
- Login Authetntication?
- Implement RTK Query for caching state?
- Psuedo Payment Page? --stripe
- UI/UX/Responsive improvements
- Code Optimization
