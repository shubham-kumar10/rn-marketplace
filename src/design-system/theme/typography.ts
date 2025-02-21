export const fontFamily = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
};

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
};

export const fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
};

export const lineHeight = {
  tight: 16,
  normal: 20,
  relaxed: 24,
};

export const letterSpacing = {
  normal: 0,
  wide: 0.5,
};

export const textStyles = {
  heading: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.relaxed,
  },
  subheading: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
  },
  body: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.normal,
  },
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.tight,
  },
};

export default {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textStyles,
};
