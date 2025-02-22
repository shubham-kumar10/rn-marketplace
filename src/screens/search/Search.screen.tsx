import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import ProductCard from '../../design-system/organisms/ProductCard';
import SearchBar from '../../design-system/organisms/SearchBar';
import {debounce} from '../../utils/utils';
import {productApi} from '../../core/api/productApi';
import spacing from '../../design-system/theme/spacing';
import {ALL_CATEGORIES} from '../../data/category/categories/categories';
import {CategoryCircle} from '../../design-system/organisms/Category';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchResults = useCallback(
    debounce(async (searchText: string) => {
      if (searchText.length < 3) return;
      setIsLoading(true);
      const data = await productApi.searchProducts(searchText);
      console.log(data, isLoading);
      setResults(data);
      setIsLoading(false);
    }, 1500),
    [],
  );

  useEffect(() => {
    fetchResults(query);
  }, [query]);

  const handleCategoryPress = () => {};
  return (
    <SafeAreaView style={{marginHorizontal: spacing.md}}>
      <SearchBar leftIcon="chevron-left" query={query} setQuery={setQuery} />
      {!query ? (
        <View style={{flexDirection: 'row'}}>
          {ALL_CATEGORIES.map(category => (
            <View style={{marginHorizontal: 5}}>
              <CategoryCircle
                size={50}
                key={category.id}
                category={category}
                onPress={handleCategoryPress}
              />
            </View>
          ))}
        </View>
      ) : null}
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
          ListEmptyComponent={!isLoading && <Text>No results</Text>}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
