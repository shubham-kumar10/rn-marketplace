import {StyleSheet} from 'react-native';
import theme from '../design-system/theme';

export const bottomSheetStyles = StyleSheet.create({
  cartCount: {
    backgroundColor: theme.colors.error.error500,
    fontSize: 12,
    minWidth: 16,
    maxHeight: 16,
    lineHeight: 16,
    textAlign: 'center',
    paddingHorizontal: 2,
  },
});
