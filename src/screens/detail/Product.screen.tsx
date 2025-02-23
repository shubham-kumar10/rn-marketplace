// src/screens/detail/Product.screen.tsx
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { productService } from '../../api/services/product.service';
import { useFetch } from '../../api/usefetch';
import { AppIcon } from '../../design-system/atoms/AppIcon';
import Button from '../../design-system/atoms/Button';
import Text from '../../design-system/atoms/Text';
import { IconButton } from '../../design-system/molecules/IconButton';
import ImageGallery from '../../design-system/organisms/ImageGallery';
import theme from '../../design-system/theme';
import useCart from '../../hooks/useCart';
import { ProductDetailProps } from '../../navigation/types';
import GlobalStyles from '../../styles/global';
import { DetailItem } from './components/DetailItem';
import { InfoRow } from './components/Infoitem';
import { ProductHeader } from './components/ProductHeader';

const ProductDetailScreen: React.FC<ProductDetailProps> = ({ route }) => {
  const { productId } = route.params;

  const { data: product, isLoading } = useFetch(() =>
    productService.getProductById(productId),
  );

  const { quantity, handleAddToCart, isAddingToCart, handleQuantityChange } =
    useCart(product);

  if (isLoading || !product) {
    return (
      <SafeAreaView style={[GlobalStyles.container, GlobalStyles.center]}>
        <ActivityIndicator size="large" color={theme.colors.blue.blue500} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ProductHeader productId={productId} />

      <ScrollView>
        <ImageGallery images={[product.thumbnail, ...product.images]} />

        {/* Product Info Section */}
        <View style={[GlobalStyles.paddingMd]}>
          {/* Brand & Stock Status */}
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.justifyBetween,
              GlobalStyles.marginBottomSm,
            ]}
          >
            <Text style={styles.brand}>{product.brand}</Text>
            <View style={[GlobalStyles.flexRow, GlobalStyles.alignCenter]}>
              <AppIcon
                name={product.stock > 10 ? 'check-circle' : 'alert-circle'}
                size={16}
                color={
                  product.stock > 10
                    ? theme.colors.success.success500
                    : theme.colors.error.error500
                }
              />
              <Text
                style={[
                  GlobalStyles.marginLeftXs,
                  {
                    color:
                      product.stock > 10
                        ? theme.colors.success.success500
                        : theme.colors.error.error500,
                  },
                ]}
              >
                {product.stock > 10 ? 'In Stock' : `${product.stock} left`}
              </Text>
            </View>
          </View>

          {/* Title */}
          <Text variant="heading" style={GlobalStyles.marginBottomMd}>
            {product.title}
          </Text>

          {/* Price Section */}
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.alignCenter,
              GlobalStyles.marginBottomMd,
            ]}
          >
            <Text variant="heading" style={styles.price}>
              $
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(
                2,
              )}
            </Text>
            {product.discountPercentage > 0 && (
              <>
                <Text style={styles.originalPrice}>${product.price}</Text>
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>
                    {Math.round(product.discountPercentage)}% OFF
                  </Text>
                </View>
              </>
            )}
          </View>

          {/* Rating Section */}
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.alignCenter,
              GlobalStyles.marginBottomMd,
            ]}
          >
            <AppIcon
              name="star"
              size={20}
              color={theme.colors.amber.amber500}
            />
            <Text style={[GlobalStyles.marginLeftXs, styles.rating]}>
              {product.rating} · {product.reviews.length} Reviews
            </Text>
          </View>

          {/* Description */}
          <Text style={[styles.description, GlobalStyles.marginBottomLg]}>
            {product.description}
          </Text>

          {/* Product Details */}
          <View style={GlobalStyles.marginBottomLg}>
            <Text variant="subheading" style={GlobalStyles.marginBottomSm}>
              Product Details
            </Text>
            <View style={styles.detailsGrid}>
              <DetailItem icon="package" label="SKU" value={product.sku} />
              <DetailItem
                icon="weight"
                label="Weight"
                value={`${product.weight}g`}
              />
              <DetailItem
                icon="box"
                label="Dimensions"
                value={`${product.dimensions.width}x${product.dimensions.height}x${product.dimensions.depth}cm`}
              />
              <DetailItem
                icon="tag"
                label="Category"
                value={product.category}
              />
            </View>
          </View>

          {/* Shipping & Returns */}
          <View style={GlobalStyles.marginBottomLg}>
            <Text variant="subheading" style={GlobalStyles.marginBottomSm}>
              Shipping & Returns
            </Text>
            <View style={styles.infoBox}>
              <InfoRow icon="truck" text={product.shippingInformation} />
              <InfoRow icon="refresh" text={product.returnPolicy} />
              <InfoRow icon="shield" text={product.warrantyInformation} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={[styles.footer, GlobalStyles.paddingMd]}>
        <View style={styles.quantitySection}>
          <IconButton
            name="minus"
            size={20}
            onPress={() => handleQuantityChange(-1)}
            containerStyle={[
              styles.quantityButton,
              quantity === 1 && styles.quantityButtonDisabled,
            ]}
          />
          <Text style={styles.quantityText}>{quantity}</Text>
          <IconButton
            name="plus"
            size={20}
            onPress={() => handleQuantityChange(1)}
            containerStyle={styles.quantityButton}
          />
        </View>
        <Button
          title={isAddingToCart ? 'Adding...' : 'Add to Cart'}
          onPress={handleAddToCart}
          disabled={isAddingToCart}
          style={GlobalStyles.flexGrow1}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  brand: {
    fontSize: 14,
    color: theme.colors.neutral.neutral600,
    textTransform: 'uppercase',
  },
  price: {
    color: theme.colors.blue.blue500,
    fontSize: 24,
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: theme.colors.neutral.neutral500,
    marginLeft: theme.spacing.sm,
  },
  discountBadge: {
    backgroundColor: theme.colors.error.error100,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: theme.spacing.sm,
  },
  discountText: {
    color: theme.colors.error.error700,
    fontSize: 12,
    fontWeight: '600',
  },
  rating: {
    fontSize: 14,
    color: theme.colors.neutral.neutral700,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: theme.colors.neutral.neutral700,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoBox: {
    backgroundColor: theme.colors.neutral.neutral100,
    padding: theme.spacing.sm,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.neutral200,
    backgroundColor: 'white',
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: theme.colors.neutral.neutral300,
    borderRadius: theme.spacing.xs,
  },
  quantityButtonDisabled: {
    opacity: 0.5,
  },
  quantityText: {
    paddingHorizontal: theme.spacing.md,
    minWidth: 40,
    textAlign: 'center',
  },
});

export default ProductDetailScreen;
