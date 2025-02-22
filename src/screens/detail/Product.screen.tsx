// src/screens/detail/Product.screen.tsx
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppIcon} from '../../design-system/atoms/AppIcon';
import Button from '../../design-system/atoms/Button';
import Text from '../../design-system/atoms/Text';
import {IconButton} from '../../design-system/molecules/IconButton';
import ImageGallery from '../../design-system/organisms/ImageGallery';
import SearchBar from '../../design-system/organisms/SearchBar';
import theme from '../../design-system/theme';
import {Screens} from '../../navigation/types';
import {goBack, navigateToScreen} from '../../navigation/utils';
import {useAppDispatch} from '../../store/hooks';
import {addToCart} from '../../store/slices/cart/cartSlice';
// import {productDetail} from '../../data/category/products/productDetails';
import {productApi} from '../../core/api/productApi';
import {useFetch} from '../../core/api/usefetch';

// Add the types later
const Header = () => (
  <View style={styles.header}>
    <IconButton name="arrow-left" size={24} onPress={goBack} />
    <View style={styles.searchContainer}>
      <SearchBar />
    </View>
    <IconButton
      name="share-outline"
      size={24}
      onPress={() => {}}
      text="Share"
    />
    <IconButton
      name="heart-outline"
      size={24}
      onPress={() => {}}
      text="Wishlist"
    />
    <IconButton
      name="cart-outline"
      size={24}
      onPress={() => navigateToScreen(Screens.ROOT, {screen: Screens.CART})}
      text="Cart"
    />
  </View>
);

const DealInfo = ({productDetail}) => (
  <View style={styles.dealContainer}>
    {productDetail.dealInfo.isHotDeal && (
      <View style={styles.hotDealBadge}>
        <AppIcon name="fire" size={16} color="white" />
        <Text style={styles.hotDealText}>HOT Deal</Text>
      </View>
    )}
    <Text style={styles.dealTimer}>
      Ends in {productDetail.dealInfo.dealEndsIn}
    </Text>
    <Text style={styles.soldCount}>
      {productDetail.dealInfo.soldCount} sold
    </Text>
  </View>
);

const PriceDisplay = ({productDetail}) => (
  <View style={styles.priceSection}>
    <View style={styles.priceContainer}>
      <Text variant="subheading">
        {productDetail.currency} {productDetail.discountPrice}
      </Text>
      <Text style={styles.originalPrice}>
        {productDetail.currency} {productDetail.price}
      </Text>
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>
          {Math.round(
            ((productDetail.price - productDetail.discountPrice) /
              productDetail.price) *
              100,
          )}
          % OFF
        </Text>
      </View>
    </View>
    <Text style={styles.includingVat}>Inclusive of VAT</Text>
  </View>
);

const DeliveryInfo = ({productDetail}) => (
  <View style={styles.deliverySection}>
    <View style={styles.deliveryRow}>
      <AppIcon name="truck" size={20} color={theme.colors.neutral.neutral600} />
      <View style={styles.deliveryInfo}>
        <Text style={styles.deliveryType}>{productDetail.delivery.type}</Text>
        <Text style={styles.deliveryDate}>
          Get by {productDetail.delivery.estimatedDate}
        </Text>
      </View>
    </View>
    {/* {productDetail.delivery.isExpressAvailable && (
      <View style={[styles.deliveryRow, styles.expressDelivery]}>
        <AppIcon name="flash" size={20} color={theme.colors.amber.amber500} />
        <View style={styles.deliveryInfo}>
          <Text style={styles.expressText}>Express</Text>
          <Text style={styles.expressDate}>
            Get by {productDetail.delivery.expressEstimatedDate}
          </Text>
        </View>
        <Text style={styles.expressPrice}>
          +{productDetail.currency} {productDetail.delivery.expressPrice}
        </Text>
      </View>
    )} */}
  </View>
);

const FixedFooter: React.FC<{
  quantity: number;
  onQuantityChange: (change: number) => void;
  onAddToCart: () => void;
  isAddingToCart: boolean;
}> = ({quantity, onQuantityChange, onAddToCart, isAddingToCart}) => (
  <View style={styles.footer}>
    <View style={styles.quantitySection}>
      <TouchableOpacity
        onPress={() => onQuantityChange(-1)}
        style={[
          styles.quantityButton,
          quantity === 1 && styles.quantityButtonDisabled,
        ]}>
        <AppIcon name="minus" size={20} />
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity
        onPress={() => onQuantityChange(1)}
        style={styles.quantityButton}>
        <AppIcon name="plus" size={20} />
      </TouchableOpacity>
    </View>
    <Button
      title={isAddingToCart ? 'Adding...' : 'Add to Cart'}
      onPress={onAddToCart}
      disabled={isAddingToCart}
      variant="primary"
      style={styles.addToCartButton}
    />
  </View>
);

const ProductDetailScreen: React.FC = ({route}) => {
  const {productId} = route.params;

  console.log(
    'productId',
    productId,
    productApi.getProductById(productId).then(data => console.log('YI', data)),
  );

  const {
    data: productDetail,
    isLoading,
    error,
  } = useFetch(() => productApi.getProductById(productId));

  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (
      newQuantity >= 1 &&
      newQuantity <= productDetail.dealInfo.remainingStock
    ) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    dispatch(
      addToCart({
        productId: productDetail.id,
        title: productDetail.title,
        price: productDetail.discountPrice || productDetail.price,
        quantity: quantity,
        image: productDetail.images[0],
      }),
    );

    setTimeout(() => {
      setIsAddingToCart(false);
      setQuantity(1);
    }, 500);
  };

  if (isLoading || !productDetail) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView style={styles.container}>
        <ImageGallery images={productDetail.images} />
        <View style={styles.content}>
          <Text>{productDetail.category.name}</Text>
          <Text style={styles.title}>{productDetail.title}</Text>
          <DealInfo productDetail={productDetail} />

          <PriceDisplay productDetail={productDetail} />

          <DeliveryInfo productDetail={productDetail} />
          <Text variant="caption">{productDetail.description}</Text>

          <View style={styles.highlights}>
            <Text style={styles.sectionTitle}>Highlights</Text>
            {productDetail.highlights.map((highlight, index) => (
              <View key={index} style={styles.highlightRow}>
                <AppIcon
                  name="check-circle-outline"
                  size={16}
                  color={theme.colors.blue.blue500}
                />
                <Text style={styles.highlightText}>{highlight}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <FixedFooter
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
        onAddToCart={handleAddToCart}
        isAddingToCart={isAddingToCart}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral.neutral200,
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: theme.spacing.sm,
  },
  dealContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  hotDealBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.error.error500,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.spacing.xs,
  },
  hotDealText: {
    color: 'white',
    marginLeft: theme.spacing.xs,
    fontSize: theme.typography.fontSize.sm,
  },
  dealTimer: {
    marginLeft: theme.spacing.sm,
    color: theme.colors.error.error500,
  },
  soldCount: {
    marginLeft: theme.spacing.sm,
    color: theme.colors.neutral.neutral600,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.medium,
    marginBottom: theme.spacing.sm,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.neutral200,
  },
  quantitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.neutral.neutral300,
    borderRadius: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },
  quantityButton: {
    padding: theme.spacing.sm,
  },
  quantityButtonDisabled: {
    opacity: 0.5,
  },
  quantityText: {
    paddingHorizontal: theme.spacing.md,
    minWidth: 40,
    textAlign: 'center',
  },
  addToCartButton: {
    flex: 1,
  },
  priceSection: {
    marginVertical: theme.spacing.md,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.blue.blue500,
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
    fontWeight: theme.typography.fontWeight.medium,
  },
  includingVat: {
    fontSize: 12,
    color: theme.colors.neutral.neutral600,
    marginTop: 4,
  },

  // Delivery Section Styles
  deliverySection: {
    marginVertical: theme.spacing.md,
    backgroundColor: theme.colors.neutral.neutral100,
    borderRadius: 8,
    padding: theme.spacing.md,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  deliveryInfo: {
    marginLeft: theme.spacing.sm,
    flex: 1,
  },
  deliveryType: {
    fontSize: 14,
    color: theme.colors.neutral.neutral700,
  },
  deliveryDate: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeight.medium,
    marginTop: 2,
  },
  expressDelivery: {
    marginTop: theme.spacing.sm,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral.neutral200,
    paddingTop: theme.spacing.sm,
  },
  expressText: {
    fontSize: 14,
    color: theme.colors.amber.amber500,
    fontWeight: theme.typography.fontWeight.medium,
  },
  expressDate: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeight.medium,
    marginTop: 2,
  },
  expressPrice: {
    fontSize: 14,
    color: theme.colors.neutral.neutral700,
    fontWeight: theme.typography.fontWeight.medium,
  },

  // Seller Section Styles
  sellerSection: {
    marginVertical: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.neutral.neutral200,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeight.medium,
    marginBottom: theme.spacing.sm,
  },
  sellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellerName: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeight.medium,
    marginRight: theme.spacing.xs,
  },
  sellerRating: {
    fontSize: 14,
    color: theme.colors.amber.amber500,
    marginLeft: theme.spacing.sm,
  },

  // Bank Offers Styles
  bankOffers: {
    marginVertical: theme.spacing.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.blue.blue50,
    borderRadius: 8,
  },
  emiText: {
    fontSize: 14,
    color: theme.colors.neutral.neutral700,
    marginTop: theme.spacing.xs,
  },

  // Highlights Section Styles
  highlights: {
    marginVertical: theme.spacing.md,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing.xs,
  },
  highlightText: {
    fontSize: 14,
    color: theme.colors.neutral.neutral700,
    marginLeft: theme.spacing.sm,
    flex: 1,
  },

  // Additional Utility Styles
  divider: {
    height: 1,
    backgroundColor: theme.colors.neutral.neutral200,
    marginVertical: theme.spacing.md,
  },
  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: theme.colors.blue.blue100,
  },
  badgeText: {
    fontSize: 12,
    color: theme.colors.blue.blue700,
    fontWeight: theme.typography.fontWeight.medium,
  },
  link: {
    color: theme.colors.blue.blue500,
    textDecorationLine: 'underline',
  },
  warrantyInfo: {
    marginTop: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  warrantyText: {
    fontSize: 12,
    color: theme.colors.neutral.neutral600,
    marginLeft: theme.spacing.xs,
  },
});

export default ProductDetailScreen;
