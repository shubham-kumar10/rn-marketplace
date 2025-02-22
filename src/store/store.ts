// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart/cartSlice';
import searchReducer from './slices/search/searchSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
