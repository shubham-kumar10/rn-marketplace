import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WishlistState } from './type';

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<number>) => {
      if (!state.items.some(item => item.productId === action.payload)) {
        state.items.push({
          productId: action.payload,
          dateAdded: new Date().toISOString(),
        });
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        item => item.productId !== action.payload,
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
