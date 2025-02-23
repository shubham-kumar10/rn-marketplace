import { LinkingOptions } from '@react-navigation/native';
import { Screens } from './types';

export const linking: LinkingOptions<any> = {
  prefixes: ['marketplace://', 'https://marketplace.com'],

  config: {
    screens: {
      [Screens.ROOT]: {
        screens: {
          [Screens.HOME]: 'home',
          [Screens.SEARCH]: 'search',
          [Screens.CART]: 'cart',
        },
      },
      [Screens.PRODUCT_DETAILS]: {
        path: 'product/:productId',
        parse: {
          productId: (id: string) => Number(id),
        },
      },
      [Screens.CART_REVIEW]: 'cart/review',
      [Screens.CONFIRMATION]: 'confirmation',
      [Screens.WISHLIST]: 'wishlist',
    },
  },
};
