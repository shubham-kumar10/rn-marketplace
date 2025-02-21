// src/design-system/molecules/Badge.tsx
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../atoms/Text';
import theme from '../theme';

interface BadgeProps {
  count: number;
  maxCount?: number;
}

export const Badge = ({count, maxCount = 99}: BadgeProps) => {
  if (count === 0) return null;

  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: theme.colors.error.error500,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    position: 'absolute',
    top: -6,
    right: -8,
  },
  text: {
    fontSize: 11,
    color: 'white',
    fontWeight: theme.typography.fontWeight.bold,
  },
});
