import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

const IconSet = {
  Material: MaterialIcons,
  Ion: Ionicons,
};

export type IconType = keyof typeof IconSet;

interface IconProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
}

export const AppIcon = ({name, size = 24, color = 'black'}: IconProps) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};
