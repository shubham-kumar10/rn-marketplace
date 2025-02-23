import { StyleSheet, View } from 'react-native';
import { AppIcon } from '../../../design-system/atoms/AppIcon';
import theme from '../../../design-system/theme';
import Text from '../../../design-system/atoms/Text';
import GlobalStyles from '../../../styles/global';

export const DetailItem = ({ icon, label, value }) => (
  <View style={styles.detailItem}>
    <AppIcon name={icon} size={16} color={theme.colors.neutral.neutral600} />
    <View style={GlobalStyles.marginLeftSm}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: theme.spacing.md,
  },
  detailLabel: {
    fontSize: 12,
    color: theme.colors.neutral.neutral500,
  },
  detailValue: {
    fontSize: 14,
    color: theme.colors.neutral.neutral800,
    marginTop: 2,
  },
});
