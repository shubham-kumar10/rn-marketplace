import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slices/cart/cartSlice';
import { Product } from '../api/models/product.model';

const useCart = (product: Product) => {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    const price = Number(
      (product.price * (1 - product.discountPercentage / 100)).toFixed(2),
    );
    dispatch(
      addToCart({
        price,
        productId: product.id,
        title: product.title,
        quantity,
        image: product.thumbnail,
      }),
    );
    setTimeout(() => {
      setIsAddingToCart(false);
      setQuantity(1);
    }, 500);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return {
    quantity,
    isAddingToCart,
    handleAddToCart,
    handleQuantityChange,
  };
};

export default useCart;
