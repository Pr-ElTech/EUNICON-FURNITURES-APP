import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

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

// PERSIST CONFIG
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// PERSISTED REDUCER
const persistedReducer = persistReducer(persistConfig, userReducer);

// STORE
export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// PERSISTOR
export const persistor = persistStore(store);
