import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HOME_SCREEN_UI} from '../../data/category/home/home';
import Carousel from '../../design-system/organisms/Carousel';
import ProductRail from '../../design-system/organisms/ProductRail';
import SearchBar from '../../design-system/organisms/SearchBar';
import spacing from '../../design-system/theme/spacing';
import Banner from '../../design-system/organisms/Banner';

const Home = () => {
  const renderBanner = ({item}: {item: string}) => <Banner uri={item} />;

  return (
    <SafeAreaView>
      <SearchBar />
      <FlatList
        data={HOME_SCREEN_UI}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          if (item.type === 'BANNER') {
            return <Carousel data={item.data} renderItem={renderBanner} />;
          }
          if (item.type === 'RAIL') {
            return <ProductRail collection={item.data} />;
          }
          return null;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 3 * spacing.lg}}
      />
    </SafeAreaView>
  );
};

export default Home;
