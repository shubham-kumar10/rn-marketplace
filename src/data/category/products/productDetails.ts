// src/screens/detail/mock.ts

export const productDetail = {
  id: 4,
  title: 'Apple iPhone 15 Pro Max (256GB) - Natural Titanium',
  price: 5099,
  discountPrice: 4799,
  currency: 'AED',
  description:
    "FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with textured matte glass back. It also features a Ceramic Shield front that's tougher than any smartphone glass. And it's splash, water, and dust resistant.",
  category: {
    id: 1,
    name: 'Mobiles & Tablets',
    image: 'https://images.noon.com/category/mobiles.png',
  },
  images: [
    'https://f.nooncdn.com/p/pnsku/N70106183V/45/_/1726043631/3064c465-3457-42ef-a234-0b6382365281.jpg?format=avif&width=240',
    'https://f.nooncdn.com/p/pnsku/N70106183V/45/_/1725964087/783bc2ed-3161-4f29-a394-cdffdf30c171.jpg?format=avif&width=240',
    'https://f.nooncdn.com/p/pnsku/N70106183V/45/_/1725964082/1e633d65-9a7e-46df-ba86-6582bea15921.jpg?format=avif&width=240',
    'https://f.nooncdn.com/p/pnsku/N70106183V/45/_/1725964086/f5afadb8-ea47-41c4-88a2-45e5c2a94b2d.jpg?format=avif&width=240',
  ],
  rating: 4.8,
  inStock: true,
  delivery: {
    type: 'FREE delivery by',
    estimatedDate: 'Tomorrow, Feb 23',
    isExpressAvailable: true,
    expressPrice: 0,
    expressEstimatedDate: 'Today, Feb 22',
    returnPolicy: '15 days return policy',
  },
  coupons: [
    {
      code: 'MOBILES10',
      discount: '10% off up to 500 AED',
      validTill: '2024-03-31',
      minPurchase: 1000,
      description: 'Valid on all mobile phones',
    },
    {
      code: 'NOON50',
      discount: '50 AED off',
      validTill: '2024-12-31',
      minPurchase: 500,
      description: 'Valid for first-time buyers',
    },
  ],
  preorder: false,
  emiOptions: {
    installments: [3, 6, 12],
    monthlyAmount: 399.92,
    banks: ['ENBD', 'ADCB', 'FAB', 'Mashreq'],
    minPurchase: 1000,
    interestRate: '0%',
  },
  dealInfo: {
    isHotDeal: true,
    dealEndsIn: '2d 5h 30m',
    soldCount: 234,
    remainingStock: 15,
    discount: {
      percentage: 6,
      amount: 300,
    },
    type: 'Lightning Deal',
  },
  highlights: [
    'FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design',
    'A17 PRO CHIP — Game-changing performance with the A17 Pro chip',
    '48MP MAIN CAMERA — The biggest sensor ever in an iPhone',
    'ACTION BUTTON — A new button you can customize to do things like quickly access the camera',
    'USB-C — A universal port for charging and transferring files',
    'ALL-DAY BATTERY LIFE — Up to 29 hours video playback',
  ],
};
