import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Product} from '../../data/type';
import {Screens} from '../../navigation/types';
import {navigateToScreen} from '../../navigation/utils';

interface ProductCardProps {
  product: Product;
  style: ViewStyle;
}

const CARD_WIDTH = 170; // Fixed card width
const IMAGE_ASPECT_RATIO = 1; // 1:1 aspect ratio for image
const IMAGE_HEIGHT = CARD_WIDTH * IMAGE_ASPECT_RATIO;

import {AppIcon} from '../atoms/AppIcon';
import theme from '../theme';

interface ProductCardProps {
  product: Product;
  style?: ViewStyle;
}

interface ProductCardProps {
  product: Product;
  style?: ViewStyle;
  onWishlistPress?: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  style,
  onWishlistPress,
}) => {
  const handleWishlistPress = () => {
    onWishlistPress?.(product.id);
  };

  const renderBadges = () => {
    if (!product.badges) return null;

    return (
      <View style={styles.topBadges}>
        {product.badges.isNoonExclusive && (
          <View style={styles.exclusiveBadge}>
            <Text style={styles.exclusiveText}>noon exclusive</Text>
          </View>
        )}
        {product.badges.isExpress && (
          <View style={[styles.badge, styles.expressBadge]}>
            <AppIcon
              name="flash"
              size={12}
              color={theme.colors.amber.amber500}
            />
            <Text style={styles.expressText}>express</Text>
          </View>
        )}
      </View>
    );
  };

  const renderPriceSection = () => {
    return (
      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          AED {product.price?.toLocaleString() ?? 'N/A'}
        </Text>
        {product.discount && (
          <>
            <Text style={styles.originalPrice}>
              AED {product.discount.originalPrice?.toLocaleString()}
            </Text>
            {product.discount.percentage > 0 && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>
                  {product.discount.percentage}% OFF
                </Text>
              </View>
            )}
          </>
        )}
      </View>
    );
  };

  const renderRating = () => {
    if (!product.rating?.average) return null;

    return (
      <View style={styles.ratingContainer}>
        <AppIcon name="star" size={14} color={theme.colors.amber.amber500} />
        <Text style={styles.rating}>
          {product.rating.average.toFixed(1)}
          {product.rating.count > 0 && ` (${product.rating.count})`}
        </Text>
      </View>
    );
  };

  const renderDeliveryBadge = () => {
    if (!product.badges?.isFreeDelivery) return null;

    return (
      <View style={styles.deliveryBadge}>
        <AppIcon name="truck" size={14} color={theme.colors.blue.blue500} />
        <Text style={styles.deliveryText}>Free Delivery</Text>
      </View>
    );
  };

  const renderStockStatus = () => {
    if (!product.stock?.isLowStock || !product.stock?.available) return null;

    return (
      <Text style={styles.stockStatus}>
        Only {product.stock.available} left
      </Text>
    );
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigateToScreen(Screens.PRODUCT_DETAILS, {productId: product.id})
      }
      style={[styles.container, style]}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{uri: product.images?.[0]}} style={styles.image} />
          {renderBadges()}
          <TouchableOpacity
            style={styles.wishlistButton}
            onPress={handleWishlistPress}>
            <AppIcon
              name="heart-outline"
              size={20}
              color={theme.colors.neutral.neutral600}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={2} style={styles.title}>
              {product.title}
            </Text>
          </View>
          {renderPriceSection()}
          {renderRating()}
          {renderDeliveryBadge()}
          {renderStockStatus()}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    margin: theme.spacing.xs,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.neutral.neutral200,
  },
  imageContainer: {
    width: CARD_WIDTH,
    height: IMAGE_HEIGHT,
    position: 'relative',
  },
  titleContainer: {
    minHeight: 36, // Minimum height for 2 lines
    marginBottom: theme.spacing.xs,
  },
  image: {
    width: CARD_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    backgroundColor: theme.colors.neutral.neutral100,
  },
  content: {
    padding: theme.spacing.sm,
    height: 120, // Fixed height for content
  },
  title: {
    fontSize: 13,
    lineHeight: 18,
    height: 36, // Fixed height for 2 lines
    marginBottom: theme.spacing.xs,
    color: theme.colors.neutral.neutral800,
  },
  priceContainer: {
    height: 24, // Fixed height for price section
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.xs,
  },
  topBadges: {
    position: 'absolute',
    top: theme.spacing.xs,
    left: theme.spacing.xs,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  exclusiveBadge: {
    backgroundColor: theme.colors.blue.blue500,
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 4,
  },
  exclusiveText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  expressBadge: {
    backgroundColor: theme.colors.amber.amber100,
  },
  expressText: {
    color: theme.colors.amber.amber700,
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 2,
  },
  wishlistButton: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: theme.spacing.xs,
  },
  content: {
    padding: theme.spacing.sm,
  },
  title: {
    fontSize: 13,
    marginBottom: theme.spacing.xs,
    color: theme.colors.neutral.neutral800,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.xs,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.blue.blue500,
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: theme.colors.neutral.neutral500,
    marginLeft: theme.spacing.xs,
  },
  discountBadge: {
    backgroundColor: theme.colors.error.error100,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: theme.spacing.xs,
  },
  discountText: {
    fontSize: 10,
    color: theme.colors.error.error700,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  rating: {
    fontSize: 12,
    color: theme.colors.neutral.neutral600,
    marginLeft: 4,
  },
  deliveryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.xs,
  },
  deliveryText: {
    fontSize: 12,
    color: theme.colors.blue.blue500,
    marginLeft: 4,
  },
  stockStatus: {
    fontSize: 11,
    color: theme.colors.error.error700,
    marginTop: theme.spacing.xs,
  },
});

export default ProductCard;
