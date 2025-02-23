import React from 'react';
import useWishlist from '../../../hooks/useWishlist';
import WishlistIcon from '../../../design-system/organisms/WishlistIcon';
import colors from '../../../design-system/theme/colors';
import { ViewStyle } from 'react-native';

interface WishlistButtonProps {
  productId: number;
  styles: ViewStyle[];
}

const WishlistButton: React.FC<WishlistButtonProps> = ({
  productId,
  styles,
}) => {
  const { handleWishlistPress, isInWishlist } = useWishlist(productId);

  return (
    <WishlistIcon
      styles={styles}
      onPress={handleWishlistPress}
      color={isInWishlist ? colors.error.error500 : colors.neutral.neutral500}
      iconName={isInWishlist ? 'heart' : 'heart-outline'}
    />
  );
};

export default WishlistButton;
