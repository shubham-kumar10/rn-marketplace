import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IMAGE_HEIGHT_MEDIUM, WINDOW_WIDTH} from '../../constants.ts';

const Banner = ({uri}) => {
  return (
    <View>
      <Image source={{uri}} style={styles.image} />
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
