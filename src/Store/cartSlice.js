import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
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

      const existingItem = state.cartItems.find(
        (item) => item._id === productToAdd._id,
      );

      if (!existingItem) {
        state.cartItems.push({ ...productToAdd, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }

      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0,
      );
    },
    cartActionFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
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
