// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './slice/cardslice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);
