// src/screens/cart/Cart.screen.tsx
import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../design-system/atoms/Button';
import Text from '../../design-system/atoms/Text';
import theme from '../../design-system/theme';
import { Screens } from '../../navigation/types';
import { navigateToScreen } from '../../navigation/utils';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  removeFromCart,
  updateQuantity,
} from '../../store/slices/cart/cartSlice';
import CartItem from './components/CartItem';
import EmptyCart from './components/EmptyCart';

const Cart = () => {
  const { items } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const calculateTotal = useMemo(() => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }, [items]);

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        {items.map(item => (
          <CartItem
            item={item}
            key={item.productId}
            decrement={() =>
              handleUpdateQuantity(item.productId, item.quantity - 1)
            }
            increment={() =>
              handleUpdateQuantity(item.productId, item.quantity + 1)
            }
            removeFromCart={() => dispatch(removeFromCart(item.productId))}
          />
        ))}

        <View style={styles.summary}>
          <Text variant="heading" style={styles.summaryTitle}>
            Order Summary
          </Text>
          <View style={styles.summaryRow}>
            <Text>Subtotal</Text>
            <Text>$ {calculateTotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Shipping</Text>
            <Text>Free</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text variant="subheading">Total</Text>
            <Text variant="subheading">$ {calculateTotal}</Text>
          </View>
        </View>
      </ScrollView>

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
