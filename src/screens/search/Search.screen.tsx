import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { ALL_CATEGORIES } from '../../data/category/categories/categories';
import { CategoryCircle } from '../../design-system/organisms/Category';
import ProductCard from '../../design-system/organisms/ProductCard';
import SearchBar from '../../design-system/organisms/SearchBar';
import spacing from '../../design-system/theme/spacing';
import useSearch from './useSearch';

const Search: React.FC = () => {
  const { query, setQuery, isLoading, cachedResults } = useSearch();

  const handleCategoryPress = () => {};
  return (
    <SafeAreaView style={{ marginHorizontal: spacing.md }}>
      <SearchBar leftIcon="chevron-left" query={query} setQuery={setQuery} />
      {!query ? (
        <View style={{ flexDirection: 'row' }}>
          {ALL_CATEGORIES.map(category => (
            <View style={{ marginHorizontal: 5 }}>
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
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        />
      ) : (
        <FlatList
          data={cachedResults}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <ProductCard product={item} />}
          ListEmptyComponent={!isLoading && <Text>No results</Text>}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
