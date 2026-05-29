import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice"; // 1. Import your new cart reducer

import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// PERSIST CONFIG FOR USER
const userPersistConfig = {
  key: "user", // Renamed key to 'user' for clarity
  version: 1,
  storage,
};

// 2. NEW PERSIST CONFIG FOR CART (So items survive page reloads)
const cartPersistConfig = {
  key: "cart",
  version: 1,
  storage,
};

// PERSISTED REDUCERS
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer); // 3. Wrap your cart reducer

// STORE CONFIGURATION
export const store = configureStore({
  reducer: {
    user: persistedUserReducer, // User state is saved to local storage
    cart: persistedCartReducer, // 4. Cart state is now also saved to local storage!
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// PERSISTOR EXPORT
export const persistor = persistStore(store);
