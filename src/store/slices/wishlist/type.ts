export interface WishlistItem {
  productId: number;
  dateAdded: string;
}

export interface WishlistState {
  items: WishlistItem[];
}
