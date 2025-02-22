import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../styles/global';
import theme from '../theme';
import { AppIcon } from '../atoms/AppIcon';

const WishlistIcon = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.container,
        GlobalStyles.paddingSm,
        GlobalStyles.radiusRound,
        GlobalStyles.alignCenter,
        GlobalStyles.marginLeftSm,
      ]}
    >
      <AppIcon
        name="heart-outline"
        size={20}
        color={theme.colors.neutral.neutral600}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.neutral.neutral500,
    backgroundColor: theme.colors.neutral.neutral300,
  },
});

export default WishlistIcon;
