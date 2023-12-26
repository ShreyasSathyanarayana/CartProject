// src/slice/cardslice.js
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cardSlice = createSlice({
  name: 'cart',
  initialState: { data: [] },
  reducers: {
    addCart: (state, action) => {
      state.data.push(action.payload);
      console.log('add payload value', action.payload);
    },
    deletecart: (state, action) => {
      state.data = state.data.filter((item, index) => (index === action.payload.index ? false : true));
    },
    editCart: (state, action) => {
      const { index, quantity } = action.payload;
      state.data[index].quantity = quantity;
    },
  },
});

export const { addCart, editCart, deletecart } = cardSlice.actions;

const persistConfig = {
  key: 'root-cart',
  storage
};

const persistedReducer = persistReducer(persistConfig, cardSlice.reducer);

export default persistedReducer;
