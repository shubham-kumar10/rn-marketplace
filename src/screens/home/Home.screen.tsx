import React from 'react';
import {Alert, FlatList, Pressable, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HOME_SCREEN_UI} from '../../data/category/home/home';
import {AppIcon} from '../../design-system/atoms/AppIcon';
import Text from '../../design-system/atoms/Text';
import Banner from '../../design-system/organisms/Banner';
import Carousel from '../../design-system/organisms/Carousel';
import ProductRail from '../../design-system/organisms/ProductRail';
import theme from '../../design-system/theme';
import spacing from '../../design-system/theme/spacing';
import {Screens} from '../../navigation/types';
import {navigateToScreen} from '../../navigation/utils';

const LOCATION = 'Dubai Mall, Dubai';
const Home = () => {
  const renderBanner = ({item}: {item: string}) => <Banner uri={item} />;

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('Maps Not Implemented');
        }}
        style={{
          paddingVertical: 8,
          borderColor: theme.colors.neutral.neutral500,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: theme.spacing.md,
        }}>
        <AppIcon name="map-marker" size={17} />
        <Text style={{alignItems: 'flex-end', marginHorizontal: 5}}>
          <Text style={{fontWeight: theme.typography.fontWeight.medium}}>
            {LOCATION}
          </Text>
        </Text>
        <AppIcon name="chevron-down" size={20} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          flexGrow: 1,
          alignItems: 'center',
          marginBottom: theme.spacing.md,
          marginHorizontal: theme.spacing.md,
        }}>
        <Pressable
          style={{
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: theme.colors.neutral.neutral500,
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.colors.neutral.neutral300,
            flexGrow: 1,
          }}
          onPress={() =>
            navigateToScreen(Screens.ROOT, {screen: Screens.SEARCH})
          }>
          <AppIcon name="magnify" color={theme.colors.neutral.neutral700} />
          <Text style={{marginLeft: 5}} color={'disable'}>
            Search for ''
          </Text>
        </Pressable>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderRadius: 50,
            borderWidth: 1,
            alignSelf: 'center',
            marginLeft: 10,
            padding: 8,
            borderColor: theme.colors.neutral.neutral500,
            backgroundColor: theme.colors.neutral.neutral300,
          }}>
          <AppIcon
            name="heart-outline"
            size={20}
            color={theme.colors.neutral.neutral600}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={HOME_SCREEN_UI}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          if (item.type === 'BANNER') {
            return <Carousel data={item.data} renderItem={renderBanner} />;
          }
          if (item.type === 'RAIL') {
            return <ProductRail collection={item.data} />;
          }
          if (item.type === 'IMAGE') {
            return <Banner uri={item.data.list[0]} />;
          }
          return null;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 3 * spacing.lg}}
      />
    </SafeAreaView>
  );
};

export default Home;
