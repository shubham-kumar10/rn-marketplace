import {ALL_CATEGORIES} from '../../data/category/categories/categories';
import {PRODUCT_DETAILS} from '../../data/category/productDetails/productDetails';
import {Category, ProductDetails} from '../../data/type';
import {mockDelay} from '../../utils/utils';

export const productApi = {
  getProductById: async (id: number): Promise<ProductDetails> => {
    console.log('product here one');

    const product = PRODUCT_DETAILS.find(item => item.id === id);
    console.log('product here 2', product);

    await mockDelay();
    return product ?? PRODUCT_DETAILS[0];
  },

  searchProducts: async (query: string): Promise<ProductDetails[]> => {
    await mockDelay(500, 2000, 0.2);
    if (!query.trim()) {
      return [];
    }

    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = PRODUCT_DETAILS.filter(
      product =>
        product.title.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery),
    );
    return filteredResults;
  },

  getAllCategories: async (): Promise<Category[]> => {
    await mockDelay(500, 2000, 0.2);
    return ALL_CATEGORIES;
  },
};
