import { describe, it, expect } from "vitest";
import cartReducer, {
  addToCart,
  clearCart,
  decrementItemQuantity,
  deleteFromCart,
  incrementItemQuantity,
} from "./cartSlice";

import { MenuItems } from "../../types/types";
import store from "../../app/store";
import FetchFromDB from "../../components/utils/FetchFromDB";

describe("test functionality of cart features", async () => {
  const initialState = store.getState().cart
  const menuItems = await FetchFromDB('menuItems')
  it("should return initial state as an empty array", () => {
    expect(cartReducer(initialState, {type: []})).toEqual([]);  
  });

  it("AddToCart Function, will add to the state the first item listed in menuItemsData", () => {
    expect(cartReducer(initialState, addToCart(menuItems[0]))).toEqual([
      {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/bikeswoon.appspot.com/o/menuItems%2Fmain%2FbakedZiti.jpg?alt=media&token=67712327-7c69-403a-9014-444a6e2e44f9&_gl=1*zg9sbc*_ga*NjEwMDkzODQ3LjE2OTM5NDM4MDU.*_ga_CW55HF8NVT*MTY5ODM1NDU3NC41Mi4xLjE2OTgzNjA2NjkuMS4wLjA.",
        name: "Baked Ziti",
        price: 16.5,
        quantity: 1,
        type: "Main",
      },
    ]);
  });

  it("deletes an item from cart w/ deleteFromCart function", () => {
    const state : MenuItems[] = [
      {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/bikeswoon.appspot.com/o/menuItems%2Fmain%2FbakedZiti.jpg?alt=media&token=67712327-7c69-403a-9014-444a6e2e44f9&_gl=1*zg9sbc*_ga*NjEwMDkzODQ3LjE2OTM5NDM4MDU.*_ga_CW55HF8NVT*MTY5ODM1NDU3NC41Mi4xLjE2OTgzNjA2NjkuMS4wLjA.",
        name: "Baked Ziti",
        price: 16.5,
        quantity: 1,
        type: "Main",
      },
    ];
    expect(cartReducer(state, deleteFromCart(menuItems[0]))).toEqual([]);
  });

  it("increment item Quantity of state", () => {
    const state : MenuItems[] = [
      {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/bikeswoon.appspot.com/o/menuItems%2Fmain%2FbakedZiti.jpg?alt=media&token=67712327-7c69-403a-9014-444a6e2e44f9&_gl=1*zg9sbc*_ga*NjEwMDkzODQ3LjE2OTM5NDM4MDU.*_ga_CW55HF8NVT*MTY5ODM1NDU3NC41Mi4xLjE2OTgzNjA2NjkuMS4wLjA.",
        name: "Baked Ziti",
        price: 16.5,
        quantity: 1,
        type: "Main",
      },
    ];
    const expectedState : MenuItems[] = [
      {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/bikeswoon.appspot.com/o/menuItems%2Fmain%2FbakedZiti.jpg?alt=media&token=67712327-7c69-403a-9014-444a6e2e44f9&_gl=1*zg9sbc*_ga*NjEwMDkzODQ3LjE2OTM5NDM4MDU.*_ga_CW55HF8NVT*MTY5ODM1NDU3NC41Mi4xLjE2OTgzNjA2NjkuMS4wLjA.",
        name: "Baked Ziti",
        price: 16.5,
        quantity: 2,
        type: "Main",
      },
    ];
    expect(cartReducer(state, incrementItemQuantity(menuItems[0]))).toEqual(
      expectedState
    );
  });

  it("decrement item Quantity of state", () => {
    const state : MenuItems[] = [
      {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/bikeswoon.appspot.com/o/menuItems%2Fmain%2FbakedZiti.jpg?alt=media&token=67712327-7c69-403a-9014-444a6e2e44f9&_gl=1*zg9sbc*_ga*NjEwMDkzODQ3LjE2OTM5NDM4MDU.*_ga_CW55HF8NVT*MTY5ODM1NDU3NC41Mi4xLjE2OTgzNjA2NjkuMS4wLjA.",
        name: "Baked Ziti",
        price: 16.5,
        quantity: 1,
        type: "Main",
      },
    ];
    const expectedState : MenuItems[] = [
      {
        id: 4,
        img: "https://firebasestorage.googleapis.com/v0/b/bikeswoon.appspot.com/o/menuItems%2Fmain%2FbakedZiti.jpg?alt=media&token=67712327-7c69-403a-9014-444a6e2e44f9&_gl=1*zg9sbc*_ga*NjEwMDkzODQ3LjE2OTM5NDM4MDU.*_ga_CW55HF8NVT*MTY5ODM1NDU3NC41Mi4xLjE2OTgzNjA2NjkuMS4wLjA.",
        name: "Baked Ziti",
        price: 16.5,
        quantity: 1,
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
