import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../styles/global';
import theme from '../theme';
import { AppIcon } from '../atoms/AppIcon';

const WishlistIcon = ({
  onPress,
  iconName = 'heart-outline',
  styles,
  color = theme.colors.neutral.neutral600,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        styles ?? [
          style.container,
          GlobalStyles.paddingSm,
          GlobalStyles.radiusRound,
          GlobalStyles.alignCenter,
          GlobalStyles.marginLeftSm,
        ]
      }
    >
      <AppIcon name={iconName} size={20} color={color} />
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
