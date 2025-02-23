import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native';
import { Product } from '../../data/type';
import ProductCard from '../../design-system/organisms/ProductCard';
import SearchBar from '../../design-system/organisms/SearchBar';
import { SearchScreenProps } from '../../navigation/types';
import GlobalStyles from '../../styles/global';
import NoResultsFound from './components/NoResultsFound';
import SearchBanner from './components/SearchBanner';
import useSearch from './useSearch';
import { useFocusEffect } from '@react-navigation/native';

const keyExtractor = (item: Product) => item.id.toString();

const Search: React.FC<SearchScreenProps> = () => {
  const { query, setQuery, isLoading, cachedResults, clearSearch } =
    useSearch();

  const renderProduct = useCallback(
    ({ item }: { item: Product }) => <ProductCard product={item} />,
    [],
  );

  useFocusEffect(
    useCallback(() => {
      return () => {
        clearSearch();
      };
    }, [clearSearch]),
  );

  return (
    <SafeAreaView style={[GlobalStyles.flex1, GlobalStyles.marginHorizontalMd]}>
      <SearchBar leftIcon="chevron-left" query={query} setQuery={setQuery} />

      {!query && <SearchBanner />}

      <View style={[GlobalStyles.flex1, GlobalStyles.justifyCenter]}>
        {isLoading ? (
          <ActivityIndicator style={[GlobalStyles.center]} />
        ) : (
          <FlatList
            numColumns={2}
            data={cachedResults}
            renderItem={renderProduct}
            keyExtractor={keyExtractor}
            ListEmptyComponent={
              !isLoading && query.length > 3 ? <NoResultsFound /> : null
            }
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;
