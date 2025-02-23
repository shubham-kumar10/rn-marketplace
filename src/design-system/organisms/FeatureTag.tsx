import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import theme from '../theme';
import Tag from '../molecules/Tag';

interface FeatureTagProps {
  rating?: number;
  stock?: number;
  discountPercentage?: number;
}

const FeatureTag: React.FC<FeatureTagProps> = ({
  rating,
  stock,
  discountPercentage,
}) => {
  const tagConfig = useMemo(() => {
    if (discountPercentage && discountPercentage >= 15) {
      return {
        tagName: 'Best Deal',
        backgroundColor: theme.colors.error.error100,
        textStyles: { color: theme.colors.error.error700 },
      };
    }

    if (stock && stock <= 10) {
      return {
        tagName: 'Selling Fast',
        backgroundColor: theme.colors.amber.amber100,
        textStyles: { color: theme.colors.amber.amber700 },
      };
    }

    if (rating && rating >= 4.5) {
      return {
        tagName: 'Top Rated',
        backgroundColor: theme.colors.success.success100,
        textStyles: { color: theme.colors.success.success700 },
      };
    }

    if (rating && rating > 3) {
      return {
        tagName: 'Free Delivery',
        backgroundColor: theme.colors.blue.blue100,
        textStyles: { color: theme.colors.blue.blue700 },
      };
    }

    return null;
  }, [rating, stock, discountPercentage]);

  if (!tagConfig) {
    return null;
  }

  return (
    <Tag
      tagName={tagConfig.tagName}
      backgroundColor={tagConfig.backgroundColor}
      textStyles={tagConfig.textStyles}
      containerStyles={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: theme.spacing.xs,
    left: theme.spacing.xs,
  },
});

export default React.memo(FeatureTag);
