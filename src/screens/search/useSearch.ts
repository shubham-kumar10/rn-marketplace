import { useCallback, useState } from 'react';
import { productService } from '../../api/services/product.service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addRecentSearch,
  setError,
  setLoading,
  setSearchResults,
} from '../../store/slices/search/searchSlice';
import { selectCachedResults } from '../../store/slices/search/selector';
import { debounce } from '../../utils/utils';

const useSearch = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  const cachedResults = useAppSelector(state =>
    selectCachedResults(state, query),
  );
  const isLoading = useAppSelector(state => state.search.isLoading);
  const error = useAppSelector(state => state.search.error);

  const searchProducts = async (searchQuery: string) => {
    if (!searchQuery.trim() || cachedResults) return;

    try {
      dispatch(setLoading(true));
      const results = await productService.searchProducts(searchQuery);
      console.log(searchQuery, results);
      dispatch(
        setSearchResults({ query: searchQuery, results: results.products }),
      );
      dispatch(addRecentSearch(searchQuery));
    } catch (err) {
      dispatch(setError('Failed to fetch results'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const debouncedSearch = useCallback(debounce(searchProducts, 500), [
    cachedResults,
    dispatch,
  ]);

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  const clearSearch = useCallback(() => {
    setQuery('');
    dispatch(setSearchResults({ query: '', results: [] }));
    dispatch(setError(null));
    dispatch(setLoading(false));
  }, [dispatch]);

  return {
    query,
    error,
    setQuery: handleQueryChange,
    isLoading,
    cachedResults,
    clearSearch,
  };
};

export default useSearch;
