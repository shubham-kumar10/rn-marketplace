import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList, Screens} from './types';
import Home from '../screens/home/Home.screen';
import Cart from '../screens/cart/Cart.screen';
import Search from '../screens/search/Search.screen';

const Tab = createBottomTabNavigator<MainTabParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={Screens.HOME} component={Home} />
      <Tab.Screen name={Screens.SEARCH} component={Search} />
      <Tab.Screen name={Screens.CART} component={Cart} />
    </Tab.Navigator>
  );
}
export default BottomTabs;
