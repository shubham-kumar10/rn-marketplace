import { RootState } from '../../store';

const CACHE_EXPIRY = 5 * 60 * 1000;

export const selectCachedResults = (state: RootState, query: string) => {
  const cached = state.search?.cache?.[query];
  if (!cached) return null;

  if (Date.now() - cached.timestamp > CACHE_EXPIRY) {
    return null;
  }

  return cached.results;
};

export const selectRecentSearches = (state: RootState) =>
  state.search.recentSearches;
