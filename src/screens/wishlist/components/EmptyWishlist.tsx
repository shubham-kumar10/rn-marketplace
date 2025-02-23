import { View } from 'react-native';
import GlobalStyles from '../../../styles/global';
import Text from '../../../design-system/atoms/Text';

export const EmptyWishlist = () => (
  <View style={[GlobalStyles.flex1, GlobalStyles.center]}>
    <Text>No items in wishlist</Text>
  </View>
);
