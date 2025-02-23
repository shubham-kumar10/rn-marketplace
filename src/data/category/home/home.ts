import { FASHION } from '../products/fashion';
import { MISC } from '../products/misc';
import { RECOMMENDATIONS } from '../products/recommended';

export const HOME_SCREEN_UI = [
  {
    id: 1,
    type: 'BANNER',
    data: [
      'https://f.nooncdn.com/mpcms/EN0001/assets/c6165c5b-0d32-481e-aa75-50f74c626772.png?format=avif',
      'https://f.nooncdn.com/mpcms/EN0001/assets/e4616a50-41a4-4470-91ab-835ac080fe74.png?format=avif',
      'https://f.nooncdn.com/mpcms/EN0001/assets/c9180e88-cc11-4613-864c-bf24dac5c327.png?format=avif',
    ],
  },
  {
    id: 5,
    type: 'RAIL',
    data: {
      title: {
        text: 'Recommended For You',
      },
      list: RECOMMENDATIONS,
    },
  },
  {
    id: 7,
    type: 'RAIL',
    data: {
      title: {
        text: 'Fashion Hot Deals',
      },
      list: FASHION.slice(6),
    },
  },
  {
    id: 2,
    type: 'RAIL',
    data: {
      title: {
        text: '60% OFF on Top Picks',
      },
      list: [...FASHION.slice(3, 8), ...MISC.slice(3, 8)],
    },
  },
  {
    id: 8,
    type: 'IMAGE',
    data: {
      title: {},
      list: [
        'https://f.nooncdn.com/mpcms/EN0001/assets/ce4b5480-dcf1-4605-b9bc-5e7bc242be68.png?format=avif',
      ],
    },
  },
  {
    id: 3,
    type: 'RAIL',
    data: {
      title: {
        text: 'Exclusive Deals – Limited Time!',
      },
      list: MISC.slice(0, 6),
    },
  },

  {
    id: 4,
    type: 'RAIL',
    data: {
      title: {
        text: 'Hot Fashion Picks – 50% OFF',
      },
      list: [...MISC.slice(5), ...RECOMMENDATIONS],
    },
  },

  {
    id: 6,
    type: 'RAIL',
    data: {
      title: {
        text: 'Trending Deals',
      },
      list: FASHION,
    },
  },
];
