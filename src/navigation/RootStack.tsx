import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailScreen from '../screens/detail/Product.screen';
import BottomTabs from './BottomTabs';
import {RootStackParamList, Screens} from './types'; // Import Enum & Types

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: 'slide_from_right',
        contentStyle: {backgroundColor: 'white'},
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.ROOT} component={BottomTabs} />
      <Stack.Screen
        name={Screens.PRODUCT_DETAILS}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
