// src/screens/cart/CartReview.screen.tsx
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppIcon } from '../../design-system/atoms/AppIcon';
import Button from '../../design-system/atoms/Button';
import Text from '../../design-system/atoms/Text';
import theme from '../../design-system/theme';
import { Screens } from '../../navigation/types';
import { goBack, navigateToScreen } from '../../navigation/utils';
import { useAppSelector } from '../../store/hooks';
import NavigationHeader from '../../design-system/molecules/NavigationHeader';
import ReviewItem from './components/ReviewItem';
import GlobalStyles from '../../styles/global';
import PaymentOptions from './components/PaymentOptions';

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
        <NavigationHeader onBackPress={goBack} title="Review Your Order" />
        {/* Order Items Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          {items.map(item => (
            <ReviewItem key={item.productId} item={item} />
          ))}
        </View>

        {/* Payment Method */}
        <PaymentOptions />

        {/* Cost Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cost Breakdown</Text>
          <View style={styles.costRow}>
            <Text>Subtotal</Text>
            <Text>$ {calculateTotals().subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.costRow}>
            <Text>VAT (5%)</Text>
            <Text>$ {calculateTotals().tax.toFixed(2)}</Text>
          </View>
          <View style={[styles.costRow, styles.totalRow]}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalAmount}>
              $ {calculateTotals().total.toFixed(2)}
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
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
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
