import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../../app/store";

import { MemoryRouter } from "react-router-dom";

describe("Header Content", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
  });

  it("navLinks are present in the header", () => {
    const navLinks = ["Home", "About", "Menu", "Reservations", "Cart", "Login"];
    navLinks.forEach((navLink) => {
      const link = screen.getByText(navLink);
      expect(link).to.exist;
    });

    // on click of the navLink, the address bar has an adress similar to wwww.../navLink
  });
});
