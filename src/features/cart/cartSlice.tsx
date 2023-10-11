import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { MenuItems } from "../../types/types";

const initialState = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItemQuantity: (state, action: PayloadAction<MenuItems>) => {
      return state.map((item: MenuItems) => {
        if (item.id === action.payload.id) {
          if (item.quantity && item.quantity < 3)
            // hmmm
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decrementItemQuantity: (state, action: PayloadAction<MenuItems>) => {
      return state.map((item: MenuItems) => {
        if (item.id === action.payload.id) {
          if (item.quantity && item.quantity > 1)
            // hmmmm
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    addToCart: (state, action: PayloadAction<MenuItems>) => {
      // | Highlight to highlight the ability of the user to append to the cart from the highlights component
      const itemIndex = state.findIndex(
        (item: MenuItems) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        toast(`${action.payload.name} has been added to the cart`);
        return [...state, { ...action.payload, quantity: 1 }];
      } else {
        toast("This item is already in the cart");
        return state;
      }
    },
    deleteFromCart: (state, action: PayloadAction<MenuItems>) => {
      toast(`${action.payload.name} has been removed from the cart`);
      return [
        ...state.filter((item: MenuItems) => item.id !== action.payload.id),
      ];
    },

    clearCart: () => {
      toast("The Cart Has Been Cleared");
      return [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
