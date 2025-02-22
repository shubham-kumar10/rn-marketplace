// src/screens/confirmation/Confirmation.screen.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import Text from '../../design-system/atoms/Text';
import Button from '../../design-system/atoms/Button';
import { Screens } from '../../navigation/types';
import { navigateToScreen } from '../../navigation/utils';
import theme from '../../design-system/theme';
import { useAppDispatch } from '../../store/hooks';
import { clearCart } from '../../store/slices/cart/cartSlice';
import { AppIcon } from '../../design-system/atoms/AppIcon';

const CHECKOUT_LOTTIE_URL =
  'https://lottie.host/1026a06d-bc88-4a35-9be5-7d39d8941c03/xo8Vu1CdQ0.lottie';

const ConfirmationScreen = () => {
  const dispatch = useAppDispatch();
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const handleReturnHome = () => {
    navigateToScreen(Screens.ROOT, { screen: Screens.HOME });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success Animation */}
        <View style={styles.animationContainer}>
          {showFallback ? (
            <View style={styles.fallbackContainer}>
              <AppIcon
                name="checkmark-circle"
                size={80}
                color={theme.colors.blue.blue500}
              />
            </View>
          ) : (
            <LottieView
              source={{
                uri: CHECKOUT_LOTTIE_URL,
              }}
              autoPlay
              loop={false}
              style={styles.animation}
              onAnimationFailure={() => setShowFallback(true)}
            />
          )}
        </View>
        <Text variant="heading" style={styles.title}>
          Order Confirmed!
        </Text>
        <Text style={styles.subtitle}>
          Your order has been placed successfully
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            We'll send you a confirmation email with your order details
          </Text>
          <Text style={styles.infoText}>
            Estimated delivery by{' '}
            <Text style={styles.bold}>
              {new Date(
                Date.now() + 2 * 24 * 60 * 60 * 1000,
              ).toLocaleDateString()}
            </Text>
          </Text>
        </View>

        <View style={styles.actions}>
          <Button
            title="Continue Shopping"
            onPress={handleReturnHome}
            variant="primary"
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl * 2,
  },
  animationContainer: {
    width: 200,
    height: 200,
    marginBottom: theme.spacing.xl,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: theme.colors.blue.blue500,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.neutral.neutral700,
    marginBottom: theme.spacing.xl,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: theme.colors.neutral.neutral100,
    borderRadius: 8,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  infoText: {
    fontSize: 14,
    color: theme.colors.neutral.neutral700,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  bold: {
    fontWeight: theme.typography.fontWeight.bold,
  },
  actions: {
    width: '100%',
    marginTop: 'auto',
    paddingBottom: theme.spacing.xl,
  },
  button: {
    marginBottom: theme.spacing.md,
  },
  fallbackContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConfirmationScreen;
