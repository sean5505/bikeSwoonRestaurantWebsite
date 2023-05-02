import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const initialState = []; // will be used as the initialstate of the cart

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
    
      if (itemIndex === -1) {
        toast(`${action.payload.name} has been added to the cart`)
        return ( [...state, action.payload]);

      } else {
        console.log(itemIndex)
        toast('This item is already in the cart')
        return state;
      }
      
    },
    deleteFromCart: (state, action) => {
        console.log('state:', state);
        console.log('action:', action);
        toast(`${action.payload.name} has been removed from the cart`)
        return [...state.filter((item) => item.id !== action.payload.id)]
      },

  
      
      
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
