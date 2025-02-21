// globalStyles.ts
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import theme from '../design-system/theme';

type SpacingKeys = keyof typeof theme.spacing;
type Directions =
  | ''
  | 'Top'
  | 'Bottom'
  | 'Left'
  | 'Right'
  | 'Horizontal'
  | 'Vertical';

// Helper function to create spacing style key
const createSpacingStyleKey = (
  property: 'margin' | 'padding',
  direction: Directions,
  size: SpacingKeys,
) => {
  if (direction === '') {
    return `${property}${size.charAt(0).toUpperCase() + size.slice(1)}`;
  }
  return `${property}${direction}${
    size.charAt(0).toUpperCase() + size.slice(1)
  }`;
};

// Create spacing styles object
const createSpacingStyles = () => {
  const spacingStyles: Record<string, ViewStyle> = {};
  const properties = ['margin', 'padding'] as const;
  const directions: Directions[] = [
    '',
    'Top',
    'Bottom',
    'Left',
    'Right',
    'Horizontal',
    'Vertical',
  ];

  properties.forEach(property => {
    directions.forEach(direction => {
      Object.entries(theme.spacing).forEach(([size, value]) => {
        const key = createSpacingStyleKey(
          property,
          direction,
          size as SpacingKeys,
        );

        if (direction === '') {
          spacingStyles[key] = {[property]: value};
        } else if (direction === 'Horizontal' || direction === 'Vertical') {
          spacingStyles[key] = {[`${property}${direction}`]: value};
        } else {
          spacingStyles[key] = {[`${property}${direction}`]: value};
        }
      });
    });
  });

  return spacingStyles;
};

// Create text styles with all color variations
const createTextStyles = () => {
  const textStyles: Record<string, TextStyle> = {};

  Object.entries(theme.typography.textStyles).forEach(([styleKey, style]) => {
    // Base text style
    textStyles[styleKey] = style;

    // Add color variations
    Object.entries(theme.colors).forEach(([colorFamily, colorShades]) => {
      if (typeof colorShades === 'object') {
        Object.entries(colorShades).forEach(([shade, color]) => {
          const key = `${styleKey}${
            colorFamily.charAt(0).toUpperCase() + colorFamily.slice(1)
          }${shade}`;
          textStyles[key] = {
            ...style,
            color,
          };
        });
      }
    });
  });

  return textStyles;
};

// Create background color styles
const createBackgroundStyles = () => {
  const bgStyles: Record<string, ViewStyle> = {};

  Object.entries(theme.colors).forEach(([colorFamily, colorShades]) => {
    if (typeof colorShades === 'object') {
      Object.entries(colorShades).forEach(([shade, color]) => {
        const key = `bg${
          colorFamily.charAt(0).toUpperCase() + colorFamily.slice(1)
        }${shade}`;
        bgStyles[key] = {
          backgroundColor: color,
        };
      });
    }
  });

  return bgStyles;
};

export const GlobalStyles = StyleSheet.create({
  // Layout styles
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },

  // Border radius
  radiusSm: {
    borderRadius: 4,
  },
  radiusMd: {
    borderRadius: 8,
  },
  radiusLg: {
    borderRadius: 12,
  },
  radiusXl: {
    borderRadius: 16,
  },
  radiusRound: {
    borderRadius: 999,
  },

  // Common layout styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral.neutral100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: theme.colors.neutral.neutral900,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Generated styles
  ...createSpacingStyles(),
  ...createTextStyles(),
  ...createBackgroundStyles(),
});

// Type for all available style keys
export type GlobalStylesKeys = keyof typeof styles;

// Example usage:
/*
import { styles } from './globalStyles';

const MyComponent = () => {
  return (
    <View style={[
      styles.container,
      styles.marginTopSm,      // Works with autocomplete
      styles.paddingHorizontalMd,
      styles.bgBlue500
    ]}>
      <Text style={[
        styles.heading,
        styles.marginBottomMd
      ]}>
        Hello World
      </Text>
    </View>
  );
};
*/

export default GlobalStyles;
