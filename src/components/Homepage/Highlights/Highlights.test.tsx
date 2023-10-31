import {render, screen, } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Highlights from "./Highlights";
import { menuItems } from "../../Menu/menuItemsData";
import { Provider } from "react-redux";
import store from "../../../app/store";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Highlights", () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Highlights />
          </QueryClientProvider>
        </MemoryRouter>
      </Provider>
    );
  }); // interesting, in this one i get an error related to called this.mql.addListener because of the carousel, gonna have to remove the dependencie as originally planned
  it("Highlights should feature the specials of the menuItems", () => {
    const specials = menuItems.filter((item) =>
      item.type.toLowerCase().includes("specials")
    );
    specials.forEach((item) => {
      const itemName = screen.queryAllByText(item.name);
      expect(itemName).to.exist;
    });
  });
  
});
