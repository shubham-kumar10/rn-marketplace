import {useState, useEffect} from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export function useFetch<T>(fetchFn: () => Promise<T>) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({...prev, isLoading: true}));
        const result = await fetchFn();
        setState({data: result, isLoading: false, error: null});
      } catch (error) {
        setState({data: null, isLoading: false, error: error as Error});
      }
    };

    fetchData();
  }, []);

  return state;
}
