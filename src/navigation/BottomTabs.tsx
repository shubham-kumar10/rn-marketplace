import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../store/hooks';
import { bottomSheetStyles } from './styles';
import { MainTabParamList, Screens } from './types';

// Screens
import Home from '../screens/home/Home.screen';
import Cart from '../screens/cart/Cart.screen';
import Search from '../screens/search/Search.screen';
import theme from '../design-system/theme';
import GlobalStyles from '../styles/global';

const Tab = createBottomTabNavigator<MainTabParamList>();

const TAB_ICON_MAP: Record<keyof MainTabParamList, string> = {
  [Screens.HOME]: 'home',
  [Screens.SEARCH]: 'search',
  [Screens.CART]: 'cart',
};

const BADGE_THRESHOLD = 9;

function BottomTabs() {
  const cartItemsCount = useAppSelector(state =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  const getTabBarBadge = (route: keyof MainTabParamList) => {
    if (route !== Screens.CART || cartItemsCount === 0) return {};

    return {
      tabBarBadge: cartItemsCount > BADGE_THRESHOLD ? '9+' : cartItemsCount,
      tabBarBadgeStyle: bottomSheetStyles.cartCount,
    };
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name={TAB_ICON_MAP[route.name]} size={size - 4} color={color} />
        ),
        tabBarActiveTintColor: theme.colors.blue.blue500,
        tabBarInactiveTintColor: theme.colors.neutral.neutral700,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 60,
          ...GlobalStyles.shadow,
        },
        ...getTabBarBadge(route.name),
      })}
    >
      <Tab.Screen name={Screens.HOME} component={Home} />
      <Tab.Screen name={Screens.CART} component={Cart} />
      <Tab.Screen name={Screens.SEARCH} component={Search} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
