import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Tracks every unique product object added
  totalQuantity: 0, // Synchronizes the navbar top icon badge
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartActionStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    addToCartSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;

      const productToAdd = action.payload;

      // Look through existing items to see if the product is already in the cart
      const existingItem = state.cartItems.find(
        (item) => item._id === productToAdd._id,
      );

      if (!existingItem) {
        // If it's a new item, push it to the array with a starting quantity of 1
        state.cartItems.push({ ...productToAdd, quantity: 1 });
      } else {
        // If it already exists, increment its quantity counter
        existingItem.quantity += 1;
      }

      // Dynamically calculate total badge count by adding up all quantities
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0,
      );
    },
    cartActionFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Optional utility: Useful for building out your Cart page later
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  cartActionStart,
  addToCartSuccess,
  cartActionFailure,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
