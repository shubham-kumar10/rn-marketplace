import {fashion} from '../products/fashion';
import {RECOMMENDATIONS} from '../products/recommended';
import {TRENDING} from '../products/trending';

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
      list: RECOMMENDATIONS.slice(20, 25),
    },
  },
  {
    id: 2,
    type: 'RAIL',
    data: {
      title: {
        text: '60% OFF on Top Picks',
      },
      list: RECOMMENDATIONS.slice(4, 10),
    },
  },
  {
    id: 3,
    type: 'RAIL',
    data: {
      title: {
        text: 'Exclusive Deals – Limited Time!',
      },
      list: RECOMMENDATIONS.slice(1, 6),
    },
  },
  {
    id: 4,
    type: 'RAIL',
    data: {
      title: {
        text: 'Hot Fashion Picks – 50% OFF',
      },
      list: RECOMMENDATIONS.slice(10, 16),
    },
  },

  {
    id: 6,
    type: 'RAIL',
    data: {
      title: {
        text: 'Trending Deals',
      },
      list: TRENDING,
    },
  },
  {
    id: 7,
    type: 'RAIL',
    data: {
      title: {
        text: 'Hot Deals on Fashion',
      },
      list: fashion.slice(3),
    },
  },
];
