import React from 'react';
import { View } from 'react-native';
import LocationSelector from '../../../design-system/organisms/LocationSelector';
import SearchBox from '../../../design-system/organisms/SearchBox';
import WishlistIcon from '../../../design-system/organisms/WishlistIcon';
import GlobalStyles from '../../../styles/global';

const Header = () => {
  return (
    <>
      <LocationSelector />
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.flexGrow1,
          GlobalStyles.alignCenter,
          GlobalStyles.marginBottomMd,
          GlobalStyles.marginHorizontalMd,
        ]}
      >
        <SearchBox />
        <WishlistIcon onPress={() => {}} />
      </View>
    </>
  );
};

export default Header;
