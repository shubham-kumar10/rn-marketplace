import { Product } from '../../../data/type';

export interface CartItem {
  productId: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  isLoading: boolean;
  error: string | null;
}
