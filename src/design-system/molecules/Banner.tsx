import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IMAGE_HEIGHT_MEDIUM, WINDOW_WIDTH } from '../../constants/index.ts';
import Image from '../atoms/Image.tsx';

const Banner = ({ uri }) => {
  return (
    <View>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: WINDOW_WIDTH,
    height: IMAGE_HEIGHT_MEDIUM,
  },
});

export default Banner;
