import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { CartItem as CartItemInterface } from '../../../store/slices/cart/types';
import { AppIcon } from '../../../design-system/atoms/AppIcon';
import theme from '../../../design-system/theme';
import GlobalStyles from '../../../styles/global';

interface CartItemProps {
  item: CartItemInterface;
  removeFromCart: () => void;
  increment: () => void;
  decrement: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  removeFromCart,
  increment,
  decrement,
}) => {
  return (
    <View
      key={item.productId}
      style={[
        styles.cartItem,
        GlobalStyles.flexRow,
        GlobalStyles.paddingMd,
        GlobalStyles.marginBottomSm,
        GlobalStyles.radiusSm,
      ]}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={[GlobalStyles.flex1, GlobalStyles.marginLeftMd]}>
        <Text numberOfLines={2} style={styles.productTitle}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>$ {item.price}</Text>

        <View style={[GlobalStyles.row, GlobalStyles.alignCenter]}>
          <TouchableOpacity onPress={decrement} style={GlobalStyles.paddingXs}>
            <AppIcon name="minus" size={24} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={increment} style={GlobalStyles.paddingXs}>
            <AppIcon name="plus" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={removeFromCart} style={GlobalStyles.paddingSm}>
        <AppIcon name="delete" size={24} color={theme.colors.error.error500} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: 'white',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 16,
    marginBottom: theme.spacing.xs,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  quantity: {
    marginHorizontal: theme.spacing.md,
    fontSize: 16,
  },
});

export default CartItem;
