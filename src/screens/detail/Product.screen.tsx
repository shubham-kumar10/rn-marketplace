import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGE_HEIGHT_LARGE, WINDOW_WIDTH} from '../../constants.ts';
import Text from '../../design-system/atoms/Text.tsx';
import {IconButton} from '../../design-system/molecules/IconButton';
import SearchBar from '../../design-system/organisms/SearchBar.tsx';
import {goBack, navigateToScreen} from '../../navigation/utils';
import ImageGallery from '../../design-system/organisms/ImageGallery.tsx';
import Button from '../../design-system/atoms/Button.tsx';
import {Screens} from '../../navigation/types.ts';
import {AppIcon} from '../../design-system/atoms/AppIcon.tsx';

const product = {
  id: 4,
  title: 'Handmade Fresh Table',
  price: 687,
  discountPrice: 599,
  currency: 'AED',
  description:
    'Premium handmade wooden table with a fresh design, perfect for your home or office.',
  category: {
    id: 5,
    name: 'Furniture',
    image: 'https://placeimg.com/640/480/any?r=0.591926261873231',
  },
  images: [
    'https://i.imgur.com/DMQHGA0.jpeg',
    'https://i.imgur.com/qrs9QBg.jpeg',
    'https://i.imgur.com/XVp8T1I.jpeg',
  ],
  rating: {average: 4.5, count: 128},
  stockStatus: 'In Stock',
  delivery: {type: 'Free Delivery', estimatedDate: 'March 1'},
  coupons: [
    {code: 'SAVE20', discount: '20% off'},
    {code: 'FURN10', discount: '10% off for first-time buyers'},
  ],
  preorder: false,
  emiOptions: {installments: 4, monthlyAmount: 149.75},
};

const ProductDetailScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        {/* Image Slider */}
        <View
          style={{
            flexDirection: 'row',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 5,
          }}>
          <IconButton name="arrow-left" size={30} onPress={goBack} />
          <View style={{flex: 1, paddingHorizontal: 15}}>
            <SearchBar />
          </View>
          <IconButton
            name="cart-outline"
            size={30}
            onPress={() =>
              navigateToScreen(Screens.ROOT, {screen: Screens.CART})
            }
          />
        </View>

        <ImageGallery images={product.images} />
        {/* Title & Price */}
        <View style={styles.detailsContainer}>
          <Text style={styles.category}>{product.category.name}</Text>
          <Text style={styles.title}>{product.title}</Text>

          {/* Pricing */}
          <View style={styles.priceContainer}>
            <Text style={styles.discountPrice}>
              {product.currency} {product.discountPrice}
            </Text>
            <Text style={styles.originalPrice}>
              {product.currency} {product.price}
            </Text>

            <Text style={styles.rating}>
              {' '}
              {product.rating.average}{' '}
              <AppIcon name="star" size={18} color="green" /> (
              {product.rating.count})
            </Text>
          </View>

          {/* Rating */}

          {/* Stock Status */}
          <Text style={styles.stockStatus}>{product.stockStatus}</Text>

          {/* Delivery Info */}
          <Text style={styles.delivery}>
            {product.delivery.type} - Get it by{' '}
            <Text style={styles.bold}>{product.delivery.estimatedDate}</Text>
          </Text>

          {/* Coupons */}
          {product.coupons.map((coupon, index) => (
            <View key={index} style={styles.coupon}>
              <Text>
                {coupon.discount} - Code:{' '}
                <Text style={styles.bold}>{coupon.code}</Text>
              </Text>
            </View>
          ))}

          {/* EMI Options */}
          <Text style={styles.emi}>
            Pay in {product.emiOptions.installments} interest-free payments of{' '}
            {product.currency} {product.emiOptions.monthlyAmount}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-around',
            }}>
            <Button
              title="Add To Cart"
              onPress={() => {}}
              variant="primary"
              style={{flexGrow: 1}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: WINDOW_WIDTH,
    height: IMAGE_HEIGHT_LARGE,
    resizeMode: 'contain',
  },
  detailsContainer: {padding: 16},
  category: {fontSize: 14, color: 'gray', textTransform: 'uppercase'},
  title: {fontSize: 22, fontWeight: 'bold', marginVertical: 5},
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  discountPrice: {fontSize: 20, fontWeight: 'bold', color: 'green'},
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    marginLeft: 10,
    color: 'gray',
  },
  rating: {fontSize: 16, marginVertical: 5},
  stockStatus: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  delivery: {fontSize: 16, color: 'gray', marginVertical: 5},
  bold: {fontWeight: 'bold'},
  coupon: {
    padding: 10,
    backgroundColor: '#e6ffe6',
    marginVertical: 5,
    borderRadius: 5,
  },
  emi: {fontSize: 16, color: 'gray', marginVertical: 5},
  buyButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buyButtonText: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
});

export default ProductDetailScreen;
