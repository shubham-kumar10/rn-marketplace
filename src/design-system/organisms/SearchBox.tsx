import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { Screens } from '../../navigation/types';
import { navigateToScreen } from '../../navigation/utils';
import GlobalStyles from '../../styles/global';
import { AppIcon } from '../atoms/AppIcon';
import theme from '../theme';
import Text from '../atoms/Text';

const SearchBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const searchWords = ['Mobiles', 'T-Shirts', 'Glasses', 'Jacket'];

  const onPress = () =>
    navigateToScreen(Screens.ROOT, { screen: Screens.SEARCH });

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(prev => (prev + 1) % searchWords.length);

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Pressable
      style={[
        styles.container,
        GlobalStyles.flexRow,
        GlobalStyles.flexGrow1,
        GlobalStyles.radiusRound,
        GlobalStyles.alignCenter,
        GlobalStyles.paddingVerticalSm,
      ]}
      onPress={onPress}
    >
      <AppIcon name="magnify" color={theme.colors.neutral.neutral600} />
      <Text style={styles.placeholderText}>
        Search for{' '}
        <Animated.Text
          style={[GlobalStyles.marginLeftXs, { opacity: fadeAnim }]}
        >
          {searchWords[currentIndex]}
        </Animated.Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.colors.neutral.neutral500,
    backgroundColor: theme.colors.neutral.neutral300,
  },
  placeholderText: {
    marginLeft: theme.spacing.sm,
    color: theme.colors.neutral.neutral600,
  },
});

export default SearchBox;
