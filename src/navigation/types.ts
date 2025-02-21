// types.ts
export type RootStackParamList = {
  Root: undefined;
  ProductDetails: {productId: string};
  CartReview: undefined;
  Confirmation: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Cart: undefined;
};

export enum Screens {
  ROOT = 'Root',
  PRODUCT_DETAILS = 'ProductDetails',
  CART_REVIEW = 'CartReview',
  CONFIRMATION = 'Confirmation',
  HOME = 'Home',
  SEARCH = 'Search',
  CART = 'Cart',
}
