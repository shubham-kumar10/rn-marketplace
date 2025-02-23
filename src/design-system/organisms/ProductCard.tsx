// src/design-system/molecules/ProductCard.tsx
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { navigateToScreen } from '../../navigation/utils';
import { Screens } from '../../navigation/types';
import { AppIcon } from '../atoms/AppIcon';
import Text from '../atoms/Text';
import theme from '../theme';
import GlobalStyles from '../../styles/global';
import WishlistButton from '../../screens/wishlist/components/WishlistIcon';
import FeatureTag from './FeatureTag';
import Image from '../atoms/Image';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    discountPercentage?: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    availabilityStatus: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice =
    product.price * (1 - (product.discountPercentage || 0) / 100);

  const navigateToDetails = () =>
    navigateToScreen(Screens.PRODUCT_DETAILS, { productId: product.id });

  return (
    <TouchableOpacity
      onPress={navigateToDetails}
      style={[GlobalStyles.marginSm, styles.container]}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.thumbnail }}
          style={[GlobalStyles.flexGrow1, styles.image]}
          resizeMode="contain"
        />

        {product.discountPercentage && product.discountPercentage > 1 && (
          <View style={[GlobalStyles.paddingXs, styles.discountBadge]}>
            <Text style={styles.discountText}>
              {Math.round(product.discountPercentage)}% OFF
            </Text>
          </View>
        )}

        <FeatureTag
          rating={product.rating}
          stock={product.stock}
          discountPercentage={product.discountPercentage}
        />
      </View>

      <View style={{ position: 'absolute', right: 5, bottom: 5 }}>
        <WishlistButton productId={product.id} styles={{}} />
      </View>

      <View style={[GlobalStyles.paddingSm]}>
        <Text style={[GlobalStyles.marginBottomXs, styles.brand]}>
          {product.brand}
        </Text>

        <Text
          numberOfLines={2}
          style={[GlobalStyles.marginBottomXs, styles.title]}
        >
          {product.title}
        </Text>

        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.alignCenter,
            GlobalStyles.marginBottomXs,
          ]}
        >
          <AppIcon name="star" size={12} color={theme.colors.amber.amber500} />
          <Text style={[GlobalStyles.marginLeftXs, styles.rating]}>
            {product.rating?.toFixed(1)}
          </Text>
        </View>

        <View style={[GlobalStyles.flexRow, GlobalStyles.alignCenter]}>
          <Text style={styles.price}>${discountedPrice.toFixed(2)}</Text>
          {!!product.price && product.price > 0 && (
            <Text style={[GlobalStyles.marginLeftXs, styles.originalPrice]}>
              ${product.price}
            </Text>
          )}
        </View>

        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.alignCenter,
            GlobalStyles.marginTopXs,
          ]}
        >
          <AppIcon
            name={product.stock > 10 ? 'check-circle' : 'alert-circle'}
            size={12}
            color={
              product.stock > 10
                ? theme.colors.success.success500
                : theme.colors.error.error500
            }
          />
          <Text
            style={[
              GlobalStyles.marginLeftXs,
              styles.stockText,
              {
                color:
                  product.stock > 10
                    ? theme.colors.success.success500
                    : theme.colors.error.error500,
              },
            ]}
          >
            {product.availabilityStatus}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.neutral.neutral200,
  },
  imageContainer: {
    height: 170,
    position: 'relative',
    backgroundColor: theme.colors.neutral.neutral100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  discountBadge: {
    position: 'absolute',
    top: theme.spacing.xs,
    left: theme.spacing.xs,
    backgroundColor: theme.colors.error.error100,
    borderRadius: 4,
  },
  brand: {
    fontSize: 12,
    color: theme.colors.neutral.neutral600,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 13,
    color: theme.colors.neutral.neutral800,
    lineHeight: 18,
  },
  rating: {
    fontSize: 12,
    color: theme.colors.neutral.neutral600,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.blue.blue500,
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: theme.colors.neutral.neutral500,
  },
  discountText: {
    fontSize: 10,
    color: theme.colors.error.error700,
    fontWeight: '600',
  },
  stockText: {
    fontSize: 11,
  },
});

export default ProductCard;
