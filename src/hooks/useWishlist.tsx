import MockAnalytics from '../packages/analytics/analytics';
import { EVENTS_ACTIONS } from '../packages/analytics/events';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  addToWishlist,
  removeFromWishlist,
} from '../store/slices/wishlist/wishlistSlice';

const useWishlist = (productId: number) => {
  const dispatch = useAppDispatch();
  const isInWishlist = useAppSelector(state =>
    state.wishlist.items.some(item => item.productId === productId),
  );

  const items = useAppSelector(state => state.wishlist.items);
  console.log(items);
  const handleWishlistPress = () => {
    if (isInWishlist) {
      MockAnalytics.trackClick(EVENTS_ACTIONS.WISHLISTED);
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
    }
  };

  return {
    isInWishlist,
    handleWishlistPress,
  };
};

export default useWishlist;
