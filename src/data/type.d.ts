export type CategorizedProduct = Product[];

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

// src/screens/detail/types.ts
export interface ProductDetails {
  id: number;
  title: string;
  price: number;
  discountPrice: number;
  currency: string;
  description: string;
  specification: {
    material: string;
    dimensions: string;
    weight: string;
    color: string;
    warranty: string;
  };
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
  rating: {
    average: number;
    count: number;
    breakdown: {
      [key: number]: number;
    };
  };
  seller: {
    name: string;
    rating: number;
    isNoonVerified: boolean;
  };
  stockStatus: string;
  delivery: {
    type: string;
    estimatedDate: string;
    isExpressAvailable: boolean;
    expressPrice: number;
    expressEstimatedDate: string;
    returnPolicy: string;
    warrantyAvailable: boolean;
  };
  coupons: Array<{
    code: string;
    discount: string;
    validTill: string;
  }>;
  preorder: boolean;
  emiOptions: {
    installments: number;
    monthlyAmount: number;
    banks: string[];
  };
  dealInfo: {
    isHotDeal: boolean;
    dealEndsIn: string;
    soldCount: number;
    remainingStock: number;
  };
  highlights: string[];
}
