import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartItem, CartState} from './types';

const initialState: CartState = {
  items: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => item.productId === action.payload.productId,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        item => item.productId !== action.payload,
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{productId: number; quantity: number}>,
    ) => {
      const item = state.items.find(
        item => item.productId === action.payload.productId,
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

export const {addToCart, removeFromCart, updateQuantity, clearCart} =
  cartSlice.actions;
