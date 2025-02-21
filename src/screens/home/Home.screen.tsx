import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from '../../design-system/organisms/SearchBar';
import Carousel from '../../design-system/organisms/Carousel';
import ProductCard from '../../design-system/organisms/ProductCard';
import {categoryWise} from '../../data/categoryWise';

const Home = () => {
  const renderItem = ({item}) => (
    <View>
      <Image
        source={{uri: item}}
        style={{width: Dimensions.get('screen').width, height: 200}}
      />
    </View>
  );

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <SearchBar />

      <Carousel
        data={[
          'https://f.nooncdn.com/mpcms/EN0001/assets/c6165c5b-0d32-481e-aa75-50f74c626772.png?format=avif',
          'https://f.nooncdn.com/mpcms/EN0001/assets/e4616a50-41a4-4470-91ab-835ac080fe74.png?format=avif',
          'https://f.nooncdn.com/mpcms/EN0001/assets/c9180e88-cc11-4613-864c-bf24dac5c327.png?format=avif',
        ]}
        renderItem={renderItem}
      />
      <ProductCard product={categoryWise[0]} />
    </SafeAreaView>
  );
};

export default Home;
