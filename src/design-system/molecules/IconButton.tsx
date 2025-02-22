// src/design-system/molecules/IconButton.tsx
import React from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import {AppIcon} from '../atoms/AppIcon';
import Text from '../atoms/Text';
import theme from '../theme';
import {Badge} from './Badge';

interface IconButtonProps extends IconProps {
  text?: string;
  onPress: () => void;
  badgeCount?: number;
  containerStyle?: ViewStyle;
}

export const IconButton = ({
  onPress,
  size = 24,
  name,
  color,
  text,
  badgeCount,
  containerStyle,
}: IconButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, containerStyle]}
    hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
    <View style={styles.iconContainer}>
      <AppIcon name={name} size={size} color={color} />
      {badgeCount !== undefined && <Badge count={badgeCount} />}
    </View>
    {text && <Text style={styles.text}>{text}</Text>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: theme.spacing.xs,
  },
  iconContainer: {
    position: 'relative',
  },
  text: {
    fontSize: 12,
    marginTop: 4,
    color: theme.colors.neutral.neutral600,
  },
});
