import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../store/slices/wishlist/wishlistSlice';

const useWishlist = (productId: number) => {
  const dispatch = useAppDispatch();
  const isInWishlist = useAppSelector(state =>
    state.wishlist.items.some(item => item.productId === productId),
  );

  const handleWishlistPress = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
    }
  };

  return {
    handleWishlistPress,
  };
};

export default useWishlist;
