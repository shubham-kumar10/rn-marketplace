import React from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import { AppIcon } from '../atoms/AppIcon';
import theme from '../theme';
import GlobalStyles from '../../styles/global';

const LOCATION = 'Dubai Mall, Dubai';

const LocationSelector = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert('Maps Not Implemented');
      }}
      style={[
        GlobalStyles.flexRow,
        GlobalStyles.alignCenter,
        GlobalStyles.paddingBottomSm,
        GlobalStyles.marginHorizontalMd,
      ]}
    >
      <AppIcon name="map-marker" size={17} />
      <Text style={[GlobalStyles.marginHorizontalXs, GlobalStyles.alignEnd]}>
        <Text style={{ fontWeight: theme.typography.fontWeight.medium }}>
          {LOCATION}
        </Text>
      </Text>
      <AppIcon name="chevron-down" size={20} />
    </TouchableOpacity>
  );
};

export default LocationSelector;
