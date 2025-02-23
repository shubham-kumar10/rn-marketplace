import React, { useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Product } from '../../api/models/product.model';
import { ALL_PRODUCTS } from '../../data/category/products/products';
import NavigationHeader from '../../design-system/molecules/NavigationHeader';
import ProductCard from '../../design-system/molecules/ProductCard';
import { goBack } from '../../navigation/utils';
import { useAppSelector } from '../../store/hooks';
import GlobalStyles from '../../styles/global';
import { EmptyWishlist } from './components/EmptyWishlist';

const Wishlist = () => {
  const wishlistItems = useAppSelector(state => state.wishlist.items);

  const wishlistedProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(product =>
      wishlistItems.some(item => item.productId === product.id),
    );
  }, [wishlistItems]);

  const renderProduct = useCallback(
    ({ item }: { item: Product }) => (
      <View style={GlobalStyles.flex1}>
        <ProductCard product={item} />
      </View>
    ),
    [],
  );

  const keyExtractor = useCallback((item: Product) => item.id.toString(), []);

  return (
    <SafeAreaView>
      <NavigationHeader title="Your Favourites" onBackPress={goBack} />
      <FlatList
        numColumns={2}
        data={wishlistedProducts}
        renderItem={renderProduct}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<EmptyWishlist />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default Wishlist;
