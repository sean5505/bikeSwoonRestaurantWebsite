import { createSlice } from "@reduxjs/toolkit";

const initialState = [ ];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
     return [...state, action.payload];
      // Add the payload to the state array
    },
    deleteFromCart: (state, action) => {
        console.log('state:', state);
        console.log('action:', action);
        return [...state.filter((item) => item.id !== action.payload.id)]
      },

  
      
      
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
