import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Highlights from "./Highlights";
import { menuItems } from "../../Menu/menuItemsData";
import { Provider } from "react-redux";
import store from "../../../app/store";
import AppProviders from "../../../context/AppProviders";
import { BrowserRouter } from "react-router-dom";

describe("Highlights", () => {
  beforeEach(async () => {
    render(
      <AppProviders>
        <Provider store={store}>
          <BrowserRouter>
            <Highlights />
          </BrowserRouter>
        </Provider>
      </AppProviders>
    );
  }); // interesting, in this one i get an error related to called this.mql.addListener because of the carousel, gonna have to remove the dependencie as originally planned
  it("Highlights should feature the specials of the menuItems", () => {
    const specials = menuItems.filter((item) =>
      item.type.toLowerCase().includes("specials")
    );
    specials.forEach((item) => {
      const itemName = screen.getByText(item.name);
      expect(itemName).toBeInTheDocument();
    });
  });
  it("Order Now button renders Menu Page", () => {
    const orderButton = screen.getByText("Order Now!");
    fireEvent.click(orderButton);
    waitFor(() => expect(screen.getByText("Main Menu")).toBeInTheDocument());
  });
});
