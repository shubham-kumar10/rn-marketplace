import { View, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  addRecentSearch,
  setError,
  setLoading,
  setSearchResults,
} from '../../store/slices/search/searchSlice';
import { productApi } from '../../core/api/productApi';
import { debounce } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCachedResults } from '../../store/slices/search/selector';

const useSearch = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  const cachedResults = useAppSelector(state =>
    selectCachedResults(state, query),
  );
  const isLoading = useAppSelector(state => state.search.isLoading);
  const error = useAppSelector(state => state.search.error);

  const performSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) return;

      // Check cache first
      if (cachedResults) {
        return;
      }

      try {
        dispatch(setLoading(true));
        dispatch(setError(null));
        const results = await productApi.searchProducts(searchQuery);
        dispatch(setSearchResults({ query: searchQuery, results }));
        dispatch(addRecentSearch(searchQuery));
      } catch (err) {
        dispatch(setError('Failed to fetch results'));
      } finally {
        dispatch(setLoading(false));
      }
    }, 500),
    [dispatch, cachedResults],
  );

  useEffect(() => {
    if (query.trim()) {
      performSearch(query);
    }
  }, [query, performSearch]);

  return {
    query,
    error,
    setQuery,
    isLoading,
    cachedResults,
  };
};

export default useSearch;
