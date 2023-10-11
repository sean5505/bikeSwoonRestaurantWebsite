import { describe, it, expect } from "vitest";
import cartReducer, {
  addToCart,
  clearCart,
  decrementItemQuantity,
  deleteFromCart,
  incrementItemQuantity,
} from "./cartSlice";
import { menuItems } from "../../components/Menu/menuItemsData";
import { MenuItems } from "../../types/types";
import store from "../../app/store";

describe("test functionality of cart features", () => {
  const initialState = store.getState().cart
  it("should return initial state as an empty array", () => {
    expect(cartReducer(initialState, {type: []})).toEqual([]);  
  });

  it("AddToCart Function, will add to the state the first item listed in menuItemsData", () => {
    expect(cartReducer(initialState, addToCart(menuItems[0]))).toEqual([
      {
        id: 1,
        img: "./menuAssets/main/macNcheese.jpg",
        name: "Baked Macaroni And Cheese",
        price: "20",
        quantity: 1,
        type: "Main",
      },
    ]);
  });

  it("deletes an item from cart w/ deleteFromCart function", () => {
    const state: MenuItems[] = [
      {
        id: 1,
        img: "./menuAssets/main/macNcheese.jpg",
        name: "Baked Macaroni And Cheese",
        price: "20",
        quantity: 3,
        type: "Main",
      },
    ];
    expect(cartReducer(state, deleteFromCart(menuItems[0]))).toEqual([]);
  });

  it("increment item Quantity of state", () => {
    const state: MenuItems[] = [
      {
        id: 1,
        img: "./menuAssets/main/macNcheese.jpg",
        name: "Baked Macaroni And Cheese",
        price: "20",
        quantity: 1,
        type: "Main",
      },
    ];
    const expectedState: MenuItems[] = [
      {
        id: 1,
        img: "./menuAssets/main/macNcheese.jpg",
        name: "Baked Macaroni And Cheese",
        price: "20",
        quantity: 2,
        type: "Main",
      },
    ];
    expect(cartReducer(state, incrementItemQuantity(menuItems[0]))).toEqual(
      expectedState
    );
  });

  it("decrement item Quantity of state", () => {
    const state = [
      {
        id: 1,
        img: "./menuAssets/main/macNcheese.jpg",
        name: "Baked Macaroni And Cheese",
        price: "20",
        quantity: 3,
        type: "Main",
      },
    ];
    const expectedState: MenuItems[] = [
      {
        id: 1,
        img: "./menuAssets/main/macNcheese.jpg",
        name: "Baked Macaroni And Cheese",
        price: "20",
        quantity: 2,
        type: "Main",
      },
    ];
    expect(cartReducer(state, decrementItemQuantity(menuItems[0]))).toEqual(
      expectedState
    );
  });

  it("clearCart Function removes all items from state of cart", () => {
    expect(cartReducer(initialState, clearCart())).toEqual([]);
  });
});
