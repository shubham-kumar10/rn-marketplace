import { View, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import React from 'react';
import theme from '../theme';

interface TagProps {
  tagName: string;
  backgroundColor?: string;
  textStyles?: TextStyle;
  containerStyles?: ViewStyle;
}

const Tag: React.FC<TagProps> = ({
  tagName,
  backgroundColor,
  textStyles,
  containerStyles,
}) => {
  return (
    <View
      style={[
        styles.container,
        containerStyles,
        backgroundColor && { backgroundColor },
      ]}
    >
      <Text style={[styles.text, textStyles]}>{tagName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: theme.spacing.xs,
    left: theme.spacing.xs,
    backgroundColor: theme.colors.blue.blue100,
    borderRadius: 4,
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
  },
  text: {
    fontSize: 10,
    color: theme.colors.blue.blue700,
    fontWeight: '600',
  },
});

export default Tag;
