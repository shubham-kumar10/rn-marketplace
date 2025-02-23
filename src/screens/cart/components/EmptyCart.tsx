import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from '../../../styles/global';
import { AppIcon } from '../../../design-system/atoms/AppIcon';
import theme from '../../../design-system/theme';
import Text from '../../../design-system/atoms/Text';
import Button from '../../../design-system/atoms/Button';
import { navigateToScreen } from '../../../navigation/utils';
import { Screens } from '../../../navigation/types';

const EmptyCart = () => {
  return (
    <SafeAreaView
      style={[GlobalStyles.flex1, GlobalStyles.center, GlobalStyles.paddingXl]}
    >
      <AppIcon
        name="cart-outline"
        size={64}
        color={theme.colors.neutral.neutral400}
      />
      <Text variant="heading" style={GlobalStyles.marginVerticalLg}>
        Your cart is empty
      </Text>
      <Button
        title="Continue Shopping"
        onPress={() => navigateToScreen(Screens.ROOT, { screen: Screens.HOME })}
      />
    </SafeAreaView>
  );
};

export default EmptyCart;
