import { Product } from '../../../data/type';

export interface SearchState {
  cache: {
    [query: string]: {
      results: Product[];
      timestamp: number;
    };
  };
  recentSearches: string[];
  isLoading: boolean;
  error: string | null;
}
