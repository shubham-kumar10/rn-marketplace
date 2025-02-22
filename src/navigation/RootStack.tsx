import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from '../screens/detail/Product.screen';
import BottomTabs from './BottomTabs';
import { RootStackParamList, Screens } from './types'; // Import Enum & Types
import CartReview from '../screens/cartReview/CartReview';
import ConfirmationScreen from '../screens/confirmation/Confirmation.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: 'white' },
        headerShown: false,
      }}
    >
      <Stack.Screen name={Screens.ROOT} component={BottomTabs} />
      <Stack.Screen
        name={Screens.PRODUCT_DETAILS}
        component={ProductDetailScreen}
      />
      <Stack.Screen name={Screens.CART_REVIEW} component={CartReview} />
      <Stack.Screen
        name={Screens.CONFIRMATION}
        component={ConfirmationScreen}
      />
    </Stack.Navigator>
  );
};
