import {decorProductDetails} from '../../data/category/productDetails/decor';

export function fetchSearchResults(
  query: string,
): Promise<typeof decorProductDetails> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (!query.trim()) {
        resolve([]);
        return;
      }

      const lowerCaseQuery = query.toLowerCase();
      const filteredResults = decorProductDetails.filter(
        product =>
          product.title.toLowerCase().includes(lowerCaseQuery) ||
          product.description.toLowerCase().includes(lowerCaseQuery),
      );

      resolve(filteredResults);
    }, 500);
  });
}
