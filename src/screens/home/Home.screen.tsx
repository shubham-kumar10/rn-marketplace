import React, { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HOME_SCREEN_UI } from '../../data/category/home/home';
import Banner from '../../design-system/molecules/Banner';
import Carousel from '../../design-system/organisms/Carousel';
import ProductRail from '../../design-system/organisms/ProductRail';
import spacing from '../../design-system/theme/spacing';
import Header from './components/Header';
import { HomeScreenProps } from '../../navigation/types';
import {
  productService,
  ProductService,
} from '../../api/services/product.service';
import ErrorBoundary from '../../utils/ErrorBoundary';

const Home: React.FC<HomeScreenProps> = () => {
  const renderBanner = useCallback(
    ({ item }: { item: string }) => <Banner uri={item} />,
    [],
  );

  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      switch (item.type) {
        case 'BANNER':
          return <Carousel data={item.data} renderItem={renderBanner} />;
        case 'RAIL':
          return <ProductRail collection={item.data} />;
        case 'IMAGE':
          return (
            <View style={styles.bannerStyle}>
              <Banner uri={item.data.list[0]} />
            </View>
          );
        default:
          return null;
      }
    },
    [renderBanner],
  );

  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.container} edges={['top', 'right', 'left']}>
        <Header />
        <FlatList
          data={HOME_SCREEN_UI}
          renderItem={renderItem}
          maxToRenderPerBatch={10}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
      </SafeAreaView>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: spacing.lg * 3,
  },
  bannerStyle: {
    marginVertical: spacing.md,
  },
});

export default Home;
