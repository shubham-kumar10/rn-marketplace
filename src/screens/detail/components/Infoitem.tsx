import { StyleSheet, View } from 'react-native';
import { AppIcon } from '../../../design-system/atoms/AppIcon';
import GlobalStyles from '../../../styles/global';
import Text from '../../../design-system/atoms/Text';
import theme from '../../../design-system/theme';

export const InfoRow = ({ icon, text }) => (
  <View
    style={[
      GlobalStyles.flexRow,
      GlobalStyles.alignCenter,
      GlobalStyles.marginBottomSm,
    ]}
  >
    <AppIcon name={icon} size={16} color={theme.colors.neutral.neutral600} />
    <Text style={[GlobalStyles.marginLeftSm, styles.infoText]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  infoText: {
    fontSize: 14,
    color: theme.colors.neutral.neutral700,
  },
});
