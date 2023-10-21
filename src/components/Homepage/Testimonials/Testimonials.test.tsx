import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { MemoryRouter } from "react-router-dom";
import Testimonials from "./Testimonials";
import { testimonialData } from "./testimonialData";

describe("Employees", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Testimonials />
        </MemoryRouter>
      </Provider>
    );
  });
  it("Testimonials section sucessfully renders the 'testimonials' from the data file", () => {
    testimonialData.forEach((testimonial) => {
      const name = screen.queryAllByText(testimonial.name);
      expect(name).to.exist;
    });
  });
});
