import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import {fetchSearchResults} from '../../core/api/serach';
import ProductCard from '../../design-system/organisms/ProductCard';
import SearchBar from '../../design-system/organisms/SearchBar';
import {debounce} from '../../utils/utils';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchResults = useCallback(
    debounce(async (searchText: string) => {
      setIsLoading(true);
      const data = await fetchSearchResults(searchText);
      console.log(data, isLoading);
      setResults(data);
      setIsLoading(false);
    }, 500),
    [],
  );

  useEffect(() => {
    fetchResults(query);
  }, [query]);

  return (
    <SafeAreaView>
      <SearchBar leftIcon="chevron-left" query={query} setQuery={setQuery} />
      {isLoading ? (
        <ActivityIndicator
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        />
      ) : (
        <FlatList
          data={results}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          renderItem={({item}) => <ProductCard product={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
