import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../styles/global';
import { IconButton } from './IconButton';
import Text from '../atoms/Text';

interface NavigationHeaderProps {
  onBackPress: () => void;
  title: string;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  onBackPress,
  title,
}) => {
  return (
    <View
      style={[
        GlobalStyles.row,
        GlobalStyles.marginHorizontalSm,
        GlobalStyles.marginBottomSm,
      ]}
    >
      <IconButton name="arrow-left" size={24} onPress={onBackPress} />
      <Text variant="subheading" style={[GlobalStyles.marginLeftSm]}>
        {title}
      </Text>
    </View>
  );
};

export default NavigationHeader;
