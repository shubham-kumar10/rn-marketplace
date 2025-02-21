import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Product} from '../../data/type';
import spacing from '../theme/spacing';
import {navigateToScreen} from '../../navigation/utils';
import {Screens} from '../../navigation/types';

interface ProductCardProps {
  product: Product;
  style: ViewStyle;
}

const ProductCard: React.FC<ProductCardProps> = ({product, style}) => {
  return (
    <TouchableOpacity onPress={() => navigateToScreen(Screens.PRODUCT_DETAILS)}>
      <View style={[styles.card, style]}>
        {/* Product Image */}
        <Image source={{uri: product.images[0]}} style={styles.image} />

        {/* Tag Badge */}
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>Noon Exclusive</Text>
        </View>

        {/* Favorite Button */}
        <TouchableOpacity style={styles.favoriteButton}>
          {/* <FontAwesome name="heart-o" size={18} color="#000" /> */}
        </TouchableOpacity>

        {/* Product Details */}
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          {/* <FontAwesome name="star" size={14} color="gold" /> */}
          <Text style={styles.rating}>
            {(product.id % 5) + 3.5} ({Math.floor(Math.random() * 100)})
          </Text>
        </View>

        {/* Price & Discount */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>AED {product.price}</Text>
          <Text style={styles.discountedPrice}>AED {product.price * 1.2}</Text>
        </View>

        <Text style={styles.discount}>20% OFF</Text>

        {/* Free Delivery Badge */}
        <Text style={styles.delivery}>🚚 Free Delivery</Text>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.cartButton}>
          {/* <FontAwesome name="shopping-cart" size={18} color="#000" /> */}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    // padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: spacing.sm,
    borderTopRightRadius: spacing.sm,
  },
  badgeContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'black',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    fontSize: 12,
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  discountedPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: 'gray',
    marginLeft: 6,
  },
  discount: {
    fontSize: 12,
    color: 'green',
  },
  delivery: {
    fontSize: 12,
    color: 'gray',
    marginTop: 6,
  },
  cartButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
  },
});

export default ProductCard;
