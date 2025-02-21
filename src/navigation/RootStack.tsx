import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import Home from '../screens/home/Home.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: 'slide_from_right',
        contentStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="CartReview" component={CartReviewScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} /> */}
    </Stack.Navigator>
  );
};
