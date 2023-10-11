import { render, screen} from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../../app/store";
import AppProviders from "../../../context/AppProviders";
import { BrowserRouter } from "react-router-dom";

describe("Header Content", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <AppProviders>
          <BrowserRouter>
            {
              // IT WAS THIS SHIT WHAT THE HELL
            }
            <Header />
          </BrowserRouter>
        </AppProviders>
      </Provider>
    );
  });

  it("navLinks are present in the header", () => {
    const navLinks = ['Home', 'About', 'Menu', 'Reservations', 'Cart', 'Login']
    navLinks.forEach((navLink) => {
        const link = screen.getByText(navLink)
        expect(link).to.exist;
    })
   
    // on click of the navLink, the address bar has an adress similar to wwww.../navLink
  });
});
