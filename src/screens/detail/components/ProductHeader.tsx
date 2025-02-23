// src/screens/detail/components/Header.tsx
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconButton } from '../../../design-system/molecules/IconButton';
import { goBack, navigateToScreen } from '../../../navigation/utils';
import { Screens } from '../../../navigation/types';
import theme from '../../../design-system/theme';
import GlobalStyles from '../../../styles/global';
import { useAppSelector } from '../../../store/hooks';
import { Badge } from '../../../design-system/molecules/Badge';
import useWishlist from '../../../hooks/useWishlist';

export const ProductHeader = ({ productId }) => {
  const insets = useSafeAreaInsets();
  const cartItemsCount = useAppSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );
  const { isInWishlist, handleWishlistPress } = useWishlist(productId);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop:
            Platform.OS === 'android'
              ? insets.top + theme.spacing.sm
              : theme.spacing.sm,
        },
      ]}
    >
      <View style={[GlobalStyles.flexRow, GlobalStyles.alignCenter]}>
        <IconButton
          name="arrow-left"
          size={24}
          onPress={goBack}
          containerStyle={styles.iconButton}
        />
      </View>

      <View style={[GlobalStyles.flexRow, GlobalStyles.alignCenter]}>
        <IconButton
          name={isInWishlist ? 'heart' : 'heart-outline'}
          size={24}
          onPress={handleWishlistPress}
          containerStyle={styles.iconButton}
          color={
            isInWishlist
              ? theme.colors.error.error500
              : theme.colors.neutral.neutral600
          }
        />
        <View>
          <IconButton
            name="cart"
            size={24}
            onPress={() =>
              navigateToScreen(Screens.ROOT, { screen: Screens.CART })
            }
            containerStyle={styles.iconButton}
          />
          {cartItemsCount > 0 && <Badge count={cartItemsCount} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.neutral200,
  },
  iconButton: {
    marginLeft: theme.spacing.sm,
    backgroundColor: theme.colors.neutral.neutral100,
    borderRadius: 8,
    padding: theme.spacing.sm,
  },
});
