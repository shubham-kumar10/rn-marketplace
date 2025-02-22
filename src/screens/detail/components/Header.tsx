// src/screens/detail/components/Header.tsx
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from '../../../design-system/molecules/IconButton';
import SearchBar from '../../../design-system/organisms/SearchBar';
import {goBack, navigateToScreen} from '../../../navigation/utils';
import {Screens} from '../../../navigation/types';
import theme from '../../../design-system/theme';

export const Header = () => (
  <View style={styles.header}>
    <IconButton name="arrow-left" size={24} onPress={goBack} />
    <View style={styles.searchContainer}>
      <SearchBar />
    </View>
    <IconButton
      name="share-outline"
      size={24}
      onPress={() => {}}
      text="Share"
    />
    <IconButton
      name="heart-outline"
      size={24}
      onPress={() => {}}
      text="Wishlist"
    />
    <IconButton
      name="cart-outline"
      size={24}
      onPress={() => navigateToScreen(Screens.ROOT, {screen: Screens.CART})}
      text="Cart"
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.sm,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.neutral200,
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: theme.spacing.sm,
  },
});
