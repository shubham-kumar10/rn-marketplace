import { View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import GlobalStyles from '../../../styles/global';
import Text from '../../../design-system/atoms/Text';
import { AppIcon } from '../../../design-system/atoms/AppIcon';
import theme from '../../../design-system/theme';

const CARD_OPTIONS = ['Credit/Debit Card', 'Apple Pay'];

const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState(CARD_OPTIONS[0]);

  // TODO: not required
  const onPaymentChange = () => {
    Alert.alert('We are only accepting cards right now');
    return;
    setSelectedMethod('');
  };

  return (
    <View style={styles.section}>
      <View
        style={[
          GlobalStyles.justifyBetween,
          GlobalStyles.row,
          GlobalStyles.marginBottomSm,
          GlobalStyles.alignCenter,
        ]}
      >
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <TouchableOpacity onPress={onPaymentChange}>
          <Text variant="caption" style={{ color: theme.colors.blue.blue500 }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.paymentMethod}>
        <AppIcon name="card-bulleted-outline" size={24} />
        <Text style={[GlobalStyles.marginLeftMd]}>{selectedMethod}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white',
    marginBottom: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.neutral.neutral100,
    borderRadius: 8,
  },
});

export default PaymentOptions;
