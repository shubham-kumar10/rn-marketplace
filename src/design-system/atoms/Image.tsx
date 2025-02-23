import React, { memo, useCallback, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { IMAGE_PLACEHOLDER } from '../../assets/images';
import theme from '../theme';

export type { Source, ImageStyle } from 'react-native-fast-image';

export interface ImageProps extends FastImageProps {
  placeholder?: number;
}

const Image: React.FC<ImageProps> = ({
  placeholder = IMAGE_PLACEHOLDER,
  style,
  source,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const _onError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  const _onLoadStart = useCallback(() => setIsLoading(true), []);
  const _onLoadEnd = useCallback(() => setIsLoading(false), []);

  let finalSource = hasError ? placeholder : source;

  if (finalSource?.hasOwnProperty('uri') && !isValidUrl(finalSource?.uri)) {
    finalSource = placeholder;
  }

  return (
    <View style={[style, styles.container]}>
      {isLoading && (
        <FastImage
          source={placeholder}
          style={[StyleSheet.absoluteFill, style, styles.placeholder]}
          resizeMode="cover"
        >
          <View style={styles.loaderContainer}>
            <ActivityIndicator
              size="large"
              color={theme.colors.neutral.neutral700}
            />
          </View>
        </FastImage>
      )}

      <FastImage
        {...props}
        source={finalSource}
        style={[style, styles.image]}
        onError={_onError}
        onLoadStart={_onLoadStart}
        onLoadEnd={_onLoadEnd}
      />
    </View>
  );
};

const isValidUrl = (url?: string | null) => {
  return !!(url && (url.startsWith('http://') || url.startsWith('https://')));
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    opacity: 0.5,
  },
});

export default memo(Image);
