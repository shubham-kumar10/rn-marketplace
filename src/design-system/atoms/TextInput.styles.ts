import {StyleSheet} from 'react-native';
import theme from '../theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  label: {
    ...theme.typography.textStyles.body,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: theme.colors.neutral.neutral400,
    borderRadius: 8,
    // paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.neutral.neutral100,
  },
  input: {
    flex: 1,
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.primary,
  },
  inputError: {
    borderColor: theme.colors.error.error500,
  },
  errorText: {
    color: theme.colors.error.error700,
    fontSize: theme.typography.fontSize.sm,
    marginTop: theme.spacing.xs,
  },
  iconContainer: {
    paddingHorizontal: theme.spacing.xs,
  },
});
