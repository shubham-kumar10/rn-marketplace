import React from 'react';
import {TouchableHighlight, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {IconProps} from 'react-native-vector-icons/Icon';
import {AppIcon} from '../atoms/AppIcon';
import Text from '../atoms/Text';

MaterialIcons.loadFont();

type IconButtonProps = IconProps & {
  text: string;
  onPress: () => void;
};

export const IconButton = ({
  onPress,
  size,
  name,
  color,
  text,
}: IconButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <AppIcon name={name} size={size} color={color} />
  </TouchableOpacity>
);
