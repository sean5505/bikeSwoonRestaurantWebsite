import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import MenuContainer from "./MenuContainer";
import { Provider } from "react-redux";
import store from "../../app/store";
import { menuItems } from "./menuItemsData";

describe("Menu Container", () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <MenuContainer />
      </Provider>
    );
  });
  it("Sort Options Exists in Document", () => {
    const sortOptions = [
      "All",
      "Main",
      "Appetizers",
      "Specials",
      "Sort Price by Descending",
    ];
    sortOptions.forEach((option) => {
      const value = screen.getByText(option);
      expect(value).to.exist;
    });
  });

  it("OnClick, returns All items of Menu", () => {
    const allButton = screen.getByText("All");
    fireEvent.click(allButton);
    menuItems.forEach((item) => {
      const menuItemElement = screen.getByText(item.name);
      expect(menuItemElement).to.exist;
    });
  });

  it("OnClick, returns the main options of the Menu", () => {
    const button = screen.getByText("Main");
    fireEvent.click(button);
    const mainItems = menuItems.filter((item) =>
      item.type.toLowerCase().includes("main")
    );
    mainItems.forEach((item) => {
      const itemName = screen.getByText(item.name);
      expect(itemName).to.exist;
    });
  });
  it("OnClick, returns the menu Options that are specials ", () => {
    const button = screen.getByText("Specials");
    fireEvent.click(button);
    const specials = menuItems.filter((item) =>
      item.type.toLowerCase().includes("specials")
    );
    specials.forEach((item) => {
      const itemName = screen.getByText(item.name);
      expect(itemName).to.exist;
    });
  });
  it("OnClick, returns the menu Options that are appetizers ", () => {
    const button = screen.getByText("Appetizers");
    fireEvent.click(button);
    const appetizers = menuItems.filter((item) =>
      item.type.toLowerCase().includes("appetizers")
    );
    appetizers.forEach((item) => {
      const itemName = screen.getByText(item.name);
      expect(itemName).to.exist;
    });
  });
});
