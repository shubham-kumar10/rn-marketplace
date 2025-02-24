import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import GlobalStyles from '../../styles/global';
import spacing from '../theme/spacing';

const Toast = ({ message, type = 'info', visible, onHide }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          onHide();
        });
      }, 3000);
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        styles[type],
        { opacity: fadeAnim },
        GlobalStyles.shadow,
        GlobalStyles.center,
      ]}
    >
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 100,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    borderRadius: 8,
    flex: 1,
    left: '25%',
    right: '25%',
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
  },
  info: { backgroundColor: theme.colors.blue.blue400 },
  success: { backgroundColor: theme.colors.success.success400 },
  error: { backgroundColor: theme.colors.error.error400 },
  warning: { backgroundColor: theme.colors.amber.amber400 },
});

export default Toast;
