import React, { useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HOME_SCREEN_UI } from '../../data/category/home/home';
import Banner from '../../design-system/organisms/Banner';
import Carousel from '../../design-system/organisms/Carousel';
import ProductRail from '../../design-system/organisms/ProductRail';
import spacing from '../../design-system/theme/spacing';
import Header from './components/Header';
import { HomeScreenProps } from '../../navigation/types';

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
          return <Banner uri={item.data.list[0]} />;
        default:
          return null;
      }
    },
    [renderBanner],
  );

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  listContent: {
    paddingBottom: spacing.lg * 3,
  },
});

export default Home;
