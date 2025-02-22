// src/screens/cart/Cart.screen.tsx
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {
  removeFromCart,
  updateQuantity,
} from '../../store/slices/cart/cartSlice';
import Text from '../../design-system/atoms/Text';
import Button from '../../design-system/atoms/Button';
import {AppIcon} from '../../design-system/atoms/AppIcon';
import theme from '../../design-system/theme';
import {navigateToScreen} from '../../navigation/utils';
import {Screens} from '../../navigation/types';

const Cart = () => {
  const {items} = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQuantity({productId, quantity: newQuantity}));
    }
  };

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <AppIcon
          name="cart-outline"
          size={64}
          color={theme.colors.neutral.neutral400}
        />
        <Text variant="heading" style={styles.emptyText}>
          Your cart is empty
        </Text>
        <Button
          title="Continue Shopping"
          onPress={() => navigateToScreen(Screens.HOME)}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Cart Items */}
        {items.map(item => (
          <View key={item.productId} style={styles.cartItem}>
            <Image source={{uri: item.image}} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text numberOfLines={2} style={styles.productTitle}>
                {item.title}
              </Text>
              <Text style={styles.productPrice}>AED {item.price}</Text>

              {/* Quantity Selector */}
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() =>
                    handleUpdateQuantity(item.productId, item.quantity - 1)
                  }
                  style={styles.quantityButton}>
                  <AppIcon name="minus" size={24} />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() =>
                    handleUpdateQuantity(item.productId, item.quantity + 1)
                  }
                  style={styles.quantityButton}>
                  <AppIcon name="plus" size={24} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => dispatch(removeFromCart(item.productId))}
              style={styles.removeButton}>
              <AppIcon
                name="delete"
                size={24}
                color={theme.colors.error.error500}
              />
            </TouchableOpacity>
          </View>
        ))}

        {/* Order Summary */}
        <View style={styles.summary}>
          <Text variant="heading" style={styles.summaryTitle}>
            Order Summary
          </Text>
          <View style={styles.summaryRow}>
            <Text>Subtotal</Text>
            <Text>AED {calculateTotal()}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Shipping</Text>
            <Text>Free</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text variant="subheading">Total</Text>
            <Text variant="subheading">AED {calculateTotal()}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Checkout Button */}
      <View style={styles.checkoutContainer}>
        <Button
          title="Proceed to Checkout"
          onPress={() => navigateToScreen(Screens.CART_REVIEW)}
          style={styles.checkoutButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral.neutral100,
  },
  scrollView: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
  },
  emptyText: {
    marginVertical: theme.spacing.lg,
  },
  cartItem: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    backgroundColor: 'white',
    marginBottom: theme.spacing.sm,
    borderRadius: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: theme.spacing.xs,
  },
  quantity: {
    marginHorizontal: theme.spacing.md,
    fontSize: 16,
  },
  removeButton: {
    padding: theme.spacing.sm,
  },
  summary: {
    backgroundColor: 'white',
    padding: theme.spacing.lg,
    margin: theme.spacing.md,
    borderRadius: 8,
  },
  summaryTitle: {
    marginBottom: theme.spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.neutral200,
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.sm,
  },
  checkoutContainer: {
    padding: theme.spacing.md,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.neutral200,
  },
  checkoutButton: {
    width: '100%',
  },
});

export default Cart;
