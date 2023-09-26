import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItemQuantity: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity < 3)
            // hmmm
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decrementItemQuantity: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity > 1)
            // hmmmm
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    addToCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        toast(`${action.payload.name} has been added to the cart`);
        return [...state, { ...action.payload, quantity: 1 }];
      } else {
        toast("This item is already in the cart");
        return state;
      }
    },
    deleteFromCart: (state, action) => {
      toast(`${action.payload.name} has been removed from the cart`);
      return [...state.filter((item) => item.id !== action.payload.id)];
    },

    clearCart: () => {
      toast("The Cart Has Been Cleared")
      return [];
    }

  
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
