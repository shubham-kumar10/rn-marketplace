import { StyleSheet } from 'react-native';
import theme from '../design-system/theme';

const GlobalStyles = StyleSheet.create({
  paddingXs: { padding: theme.spacing.xs },
  paddingSm: { padding: theme.spacing.sm },
  paddingMd: { padding: theme.spacing.md },
  paddingLg: { padding: theme.spacing.lg },
  paddingXl: { padding: theme.spacing.xl },

  paddingTopXs: { paddingTop: theme.spacing.xs },
  paddingTopSm: { paddingTop: theme.spacing.sm },
  paddingTopMd: { paddingTop: theme.spacing.md },
  paddingTopLg: { paddingTop: theme.spacing.lg },
  paddingTopXl: { paddingTop: theme.spacing.xl },

  paddingBottomXs: { paddingBottom: theme.spacing.xs },
  paddingBottomSm: { paddingBottom: theme.spacing.sm },
  paddingBottomMd: { paddingBottom: theme.spacing.md },
  paddingBottomLg: { paddingBottom: theme.spacing.lg },
  paddingBottomXl: { paddingBottom: theme.spacing.xl },

  paddingLeftXs: { paddingLeft: theme.spacing.xs },
  paddingLeftSm: { paddingLeft: theme.spacing.sm },
  paddingLeftMd: { paddingLeft: theme.spacing.md },
  paddingLeftLg: { paddingLeft: theme.spacing.lg },
  paddingLeftXl: { paddingLeft: theme.spacing.xl },

  paddingRightXs: { paddingRight: theme.spacing.xs },
  paddingRightSm: { paddingRight: theme.spacing.sm },
  paddingRightMd: { paddingRight: theme.spacing.md },
  paddingRightLg: { paddingRight: theme.spacing.lg },
  paddingRightXl: { paddingRight: theme.spacing.xl },

  paddingHorizontalXs: { paddingHorizontal: theme.spacing.xs },
  paddingHorizontalSm: { paddingHorizontal: theme.spacing.sm },
  paddingHorizontalMd: { paddingHorizontal: theme.spacing.md },
  paddingHorizontalLg: { paddingHorizontal: theme.spacing.lg },
  paddingHorizontalXl: { paddingHorizontal: theme.spacing.xl },

  paddingVerticalXs: { paddingVertical: theme.spacing.xs },
  paddingVerticalSm: { paddingVertical: theme.spacing.sm },
  paddingVerticalMd: { paddingVertical: theme.spacing.md },
  paddingVerticalLg: { paddingVertical: theme.spacing.lg },
  paddingVerticalXl: { paddingVertical: theme.spacing.xl },

  marginXs: { margin: theme.spacing.xs },
  marginSm: { margin: theme.spacing.sm },
  marginMd: { margin: theme.spacing.md },
  marginLg: { margin: theme.spacing.lg },
  marginXl: { margin: theme.spacing.xl },

  marginTopXs: { marginTop: theme.spacing.xs },
  marginTopSm: { marginTop: theme.spacing.sm },
  marginTopMd: { marginTop: theme.spacing.md },
  marginTopLg: { marginTop: theme.spacing.lg },
  marginTopXl: { marginTop: theme.spacing.xl },

  marginBottomXs: { marginBottom: theme.spacing.xs },
  marginBottomSm: { marginBottom: theme.spacing.sm },
  marginBottomMd: { marginBottom: theme.spacing.md },
  marginBottomLg: { marginBottom: theme.spacing.lg },
  marginBottomXl: { marginBottom: theme.spacing.xl },

  marginLeftXs: { marginLeft: theme.spacing.xs },
  marginLeftSm: { marginLeft: theme.spacing.sm },
  marginLeftMd: { marginLeft: theme.spacing.md },
  marginLeftLg: { marginLeft: theme.spacing.lg },
  marginLeftXl: { marginLeft: theme.spacing.xl },

  marginRightXs: { marginRight: theme.spacing.xs },
  marginRightSm: { marginRight: theme.spacing.sm },
  marginRightMd: { marginRight: theme.spacing.md },
  marginRightLg: { marginRight: theme.spacing.lg },
  marginRightXl: { marginRight: theme.spacing.xl },

  marginHorizontalXs: { marginHorizontal: theme.spacing.xs },
  marginHorizontalSm: { marginHorizontal: theme.spacing.sm },
  marginHorizontalMd: { marginHorizontal: theme.spacing.md },
  marginHorizontalLg: { marginHorizontal: theme.spacing.lg },
  marginHorizontalXl: { marginHorizontal: theme.spacing.xl },

  marginVerticalXs: { marginVertical: theme.spacing.xs },
  marginVerticalSm: { marginVertical: theme.spacing.sm },
  marginVerticalMd: { marginVertical: theme.spacing.md },
  marginVerticalLg: { marginVertical: theme.spacing.lg },
  marginVerticalXl: { marginVertical: theme.spacing.xl },

  flex1: { flex: 1 },
  flexGrow1: { flexGrow: 1 },
  flexRow: { flexDirection: 'row' },
  flexColumn: { flexDirection: 'column' },
  justifyCenter: { justifyContent: 'center' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  alignCenter: { alignItems: 'center' },
  alignStart: { alignItems: 'flex-start' },
  alignEnd: { alignItems: 'flex-end' },
  radiusSm: { borderRadius: theme.spacing.xs },
  radiusMd: { borderRadius: theme.spacing.sm },
  radiusLg: { borderRadius: theme.spacing.sm + theme.spacing.xl },
  radiusXl: { borderRadius: theme.spacing.md },
  radiusRound: { borderRadius: 999 },
  container: { flex: 1, backgroundColor: theme.colors.neutral.neutral100 },
  row: { flexDirection: 'row', alignItems: 'center' },
  center: { justifyContent: 'center', alignItems: 'center' },
  shadow: {
    shadowColor: theme.colors.neutral.neutral900,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export type GlobalStylesKeys = keyof typeof GlobalStyles;
export default GlobalStyles;
