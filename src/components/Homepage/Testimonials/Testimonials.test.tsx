import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import store from "../../../app/store";
import AppProviders from "../../../context/AppProviders";
import { BrowserRouter } from "react-router-dom";
import Testimonials from "./Testimonials";
import { testimonialData } from "./testimonialData";



describe("Employees", () => {
  beforeEach( () => {
    render(
      <AppProviders>
        <Provider store={store}>
          <BrowserRouter>
            <Testimonials/>
          </BrowserRouter>
        </Provider>
      </AppProviders>
    );
  }); 
  it("Testimonials section sucessfully renders the 'testimonials' from the data file", () => {
    testimonialData.forEach((testimonial) => {
        const name = screen.getByText(testimonial.name)
        expect(name).to.exist
    })
    
    });
  });





