// src/utils/test-utils.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../src/store/slices/cart/cartSlice';
import searchReducer from '../src/store/slices/search/searchSlice';
import wishlistReducer from '../src/store/slices/wishlist/wishlistSlice';

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      search: searchReducer,
      wishlist: wishlistReducer,
    },
    preloadedState,
  });
};

const AllTheProviders = ({ children }) => {
  const store = createTestStore();

  return (
    <Provider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  );
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
