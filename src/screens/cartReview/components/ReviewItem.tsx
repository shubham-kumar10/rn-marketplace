import { View, StyleSheet } from 'react-native';
import React from 'react';
import theme from '../../../design-system/theme';
import GlobalStyles from '../../../styles/global';
import Text from '../../../design-system/atoms/Text';
import Image from '../../../design-system/atoms/Image';

const ReviewItem = ({ item }) => {
  return (
    <View
      key={item.productId}
      style={[
        GlobalStyles.flexRow,
        GlobalStyles.marginBottomMd,
        GlobalStyles.paddingBottomMd,
        GlobalStyles.marginTopSm,
        styles.itemContainer,
      ]}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={[GlobalStyles.flex1, GlobalStyles.marginLeftMd]}>
        <Text numberOfLines={2} style={styles.itemTitle}>
          {item.title}
        </Text>
        <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
        <Text style={styles.itemPrice}>
          $ {(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default ReviewItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.neutral200,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderColor: theme.colors.neutral.neutral500,
    borderWidth: StyleSheet.hairlineWidth,
  },
  itemTitle: {
    fontSize: theme.typography.fontSize.md,
    marginBottom: theme.spacing.xs,
  },
  itemQuantity: {
    color: theme.colors.neutral.neutral600,
    marginBottom: theme.spacing.xs,
  },
  itemPrice: {
    fontWeight: theme.typography.fontWeight.bold,
  },
});
