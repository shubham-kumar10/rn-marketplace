import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import theme from '../theme';

interface Props extends TextProps {
  variant?: keyof typeof theme.typography.textStyles;
  color?: keyof typeof theme.colors.text;
}

const Text: React.FC<Props> = ({
  variant = 'body',
  color = 'primary',
  style,
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.text,
        theme.typography.textStyles[variant],
        { color: theme.colors.text[color] },
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.typography.fontFamily.regular,
  },
});

export default Text;
