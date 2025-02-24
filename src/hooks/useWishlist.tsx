import { useToast } from '../design-system/molecules/ToastProvider';
import MockAnalytics from '../packages/analytics/analytics';
import { EVENTS_ACTIONS } from '../packages/analytics/events';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  addToWishlist,
  removeFromWishlist,
} from '../store/slices/wishlist/wishlistSlice';

const useWishlist = (productId: number) => {
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const isInWishlist = useAppSelector(state =>
    state.wishlist.items.some(item => item.productId === productId),
  );

  const items = useAppSelector(state => state.wishlist.items);
  console.log(items);
  const handleWishlistPress = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(productId));
      showToast('Removed to Favorites !!', 'error');
    } else {
      dispatch(addToWishlist(productId));
      showToast('Added to Favorites !!', 'success');
      MockAnalytics.trackClick(EVENTS_ACTIONS.WISHLISTED);
    }
  };

  return {
    isInWishlist,
    handleWishlistPress,
  };
};

export default useWishlist;
