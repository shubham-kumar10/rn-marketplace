import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import spacing from '../theme/spacing';
import { textStyles } from '../theme/typography';
import ProductCard from '../molecules/ProductCard';

const ProductRail = ({ collection }) => {
  const { title, list } = collection;

  return (
    <View style={styles.container}>
      <View>
        <Text style={[textStyles.heading, styles.title, title.styles ?? {}]}>
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
    marginHorizontal: spacing.sm,
  },
  product: {
    marginHorizontal: spacing.sm,
    marginTop: spacing.md,
  },
});

export default ProductRail;
