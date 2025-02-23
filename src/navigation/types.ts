import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// types.ts
export type RootStackParamList = {
  Root: { screen: keyof MainTabParamList };
  ProductDetails: { productId: number };
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
  WISHLIST = 'Wishlist',
}

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type TabScreenProps<T extends keyof MainTabParamList> =
  BottomTabScreenProps<MainTabParamList, T>;

export type HomeScreenProps = TabScreenProps<Screens.HOME>;
export type SearchScreenProps = TabScreenProps<Screens.SEARCH>;
export type CartScreenProps = TabScreenProps<Screens.CART>;

export type CartReviewProps = StackScreenProps<Screens.CART_REVIEW>;
export type ConfirmationProps = StackScreenProps<Screens.CONFIRMATION>;
export type ProductDetailProps = StackScreenProps<Screens.PRODUCT_DETAILS>;

// export type ProfileScreenProps = TabScreenProps<Screens.PROFILE>;

// export type CheckoutProps = StackScreenProps<Screens.CHECKOUT>;
// export type ProfileProps = StackScreenProps<Screens.PROFILE>;
// export type OrdersProps = StackScreenProps<Screens.ORDERS>;
// export type SettingsProps = StackScreenProps<Screens.SETTINGS>;
