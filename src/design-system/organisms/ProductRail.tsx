import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import spacing from '../theme/spacing';
import { textStyles } from '../theme/typography';
import ProductCard from '../molecules/ProductCard';
import GlobalStyles from '../../styles/global';
import colors from '../theme/colors';

const ProductRail = ({ collection }) => {
  const { title, list } = collection;

  return (
    <View style={styles.container}>
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyBetween,
          GlobalStyles.alignCenter,
          GlobalStyles.marginBottomSm,
        ]}
      >
        <Text style={[textStyles.subheading, styles.title, title.styles ?? {}]}>
          {title.text}
        </Text>
      </View>
      <FlatList
        horizontal
        data={list}
        renderItem={({ item }) => (
          <ProductCard product={item} style={styles.product} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
  },
  title: {
    marginLeft: spacing.md,
    marginHorizontal: spacing.sm,
  },
  product: {
    marginHorizontal: spacing.sm,
    marginTop: spacing.md,
  },
  viewAllCta: {
    color: colors.blue.blue500,
    fontWeight: '600',
  },
});

export default ProductRail;
