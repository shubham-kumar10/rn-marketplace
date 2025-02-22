// src/screens/cart/CartReview.screen.tsx
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppIcon } from '../../design-system/atoms/AppIcon';
import Button from '../../design-system/atoms/Button';
import Text from '../../design-system/atoms/Text';
import theme from '../../design-system/theme';
import { Screens } from '../../navigation/types';
import { navigateToScreen } from '../../navigation/utils';
import { useAppSelector } from '../../store/hooks';

const CartReview = () => {
  const { items } = useAppSelector(state => state.cart);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const calculateTotals = () => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const tax = subtotal * 0.05; // 5% VAT
    return {
      subtotal,
      tax,
      total: subtotal + tax,
    };
  };

  const handlePlaceOrder = async () => {
    try {
      setIsPlacingOrder(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigateToScreen(Screens.CONFIRMATION);
    } catch (error) {
      // Handle error
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Order Items Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          {items.map(item => (
            <View key={item.productId} style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text numberOfLines={2} style={styles.itemTitle}>
                  {item.title}
                </Text>
                <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
                <Text style={styles.itemPrice}>
                  AED {(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.paymentMethod}>
            <AppIcon name="card-outline" size={24} />
            <Text style={styles.paymentText}>Credit/Debit Card</Text>
          </View>
        </View>

        {/* Cost Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cost Breakdown</Text>
          <View style={styles.costRow}>
            <Text>Subtotal</Text>
            <Text>AED {calculateTotals().subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.costRow}>
            <Text>VAT (5%)</Text>
            <Text>AED {calculateTotals().tax.toFixed(2)}</Text>
          </View>
          <View style={[styles.costRow, styles.totalRow]}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>
              AED {calculateTotals().total.toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Place Order Button */}
      <View style={styles.footer}>
        <Button
          title={isPlacingOrder ? 'Placing Order...' : 'Place Order'}
          onPress={handlePlaceOrder}
          disabled={isPlacingOrder}
          style={styles.placeOrderButton}
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
  section: {
    backgroundColor: 'white',
    marginBottom: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    marginBottom: theme.spacing.md,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.neutral200,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: theme.spacing.md,
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
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.neutral.neutral100,
    borderRadius: 8,
  },
  paymentText: {
    marginLeft: theme.spacing.md,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.neutral200,
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
  },
  totalText: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
  },
  totalAmount: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.blue.blue500,
  },
  footer: {
    padding: theme.spacing.md,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.neutral200,
  },
  placeOrderButton: {
    width: '100%',
  },
});

export default CartReview;
