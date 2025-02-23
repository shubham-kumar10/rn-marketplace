import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../data/type';
import { SearchState } from './type';

const MAX_RECENT_SEARCHES = 10;

const initialState: SearchState = {
  cache: {},
  recentSearches: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (
      state,
      action: PayloadAction<{ query: string; results: Product[] }>,
    ) => {
      const { query, results } = action.payload;
      state.cache[query] = {
        results,
        timestamp: Date.now(),
      };
    },
    addRecentSearch: (state, action: PayloadAction<string>) => {
      const query = action.payload;
      state.recentSearches = [
        query,
        ...state.recentSearches.filter(q => q !== query),
      ].slice(0, MAX_RECENT_SEARCHES);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearCache: state => {
      state.cache = {};
    },
    clearRecentSearches: state => {
      state.recentSearches = [];
    },
  },
});

export const {
  setSearchResults,
  addRecentSearch,
  setLoading,
  setError,
  clearCache,
  clearRecentSearches,
} = searchSlice.actions;

export default searchSlice.reducer;
