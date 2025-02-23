import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SCREEN_WIDTH } from '../../constants/index.ts';
import Image from '../atoms/Image.tsx';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / SCREEN_WIDTH);
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        onScroll={onScroll}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index ? styles.activeDot : {}]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH,
    height: 300,
    resizeMode: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007AFF',
  },
});

export default ImageGallery;
