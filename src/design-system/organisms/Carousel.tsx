import React, { useCallback, useEffect, useRef } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

const { width: WINDOW_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = WINDOW_WIDTH;
const ITEM_SPACING = (WINDOW_WIDTH - ITEM_WIDTH) / 2;

const Carousel = ({
  data,
  renderItem,
  autoScrollInterval = 3000,
  itemWidth = ITEM_WIDTH,
  showPartialItems = true,
}) => {
  const flatListRef = useRef<FlatList>(null);
  const autoScrollTimer = useRef<NodeJS.Timeout>(null);
  const currentIndexRef = useRef(0);
  const isAutoScrollingRef = useRef(true);

  // Memoized scroll handler
  const scrollToNextItem = useCallback(() => {
    if (!isAutoScrollingRef.current || !data.length) return;

    const nextIndex = (currentIndexRef.current + 1) % data.length;
    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
    currentIndexRef.current = nextIndex;
  }, [data.length]);

  useEffect(() => {
    if (data.length <= 1) return;

    autoScrollTimer.current = setInterval(scrollToNextItem, autoScrollInterval);

    return () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
    };
  }, [data.length, autoScrollInterval, scrollToNextItem]);

  const handleScroll = useCallback(
    event => {
      const scrollPosition = event.nativeEvent.contentOffset.x;
      currentIndexRef.current = Math.round(scrollPosition / itemWidth);
    },
    [itemWidth],
  );

  const handleMomentumScrollEnd = useCallback(() => {
    isAutoScrollingRef.current = true;
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
    }
    autoScrollTimer.current = setInterval(scrollToNextItem, autoScrollInterval);
  }, [autoScrollInterval, scrollToNextItem]);

  const handleScrollBeginDrag = useCallback(() => {
    isAutoScrollingRef.current = false;
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
    }
  }, []);

  const getItemLayout = useCallback(
    (_, index) => ({
      length: itemWidth,
      offset: itemWidth * index,
      index,
    }),
    [itemWidth],
  );

  const renderItemWrapper = useCallback(
    ({ item, index }) => (
      <View style={[styles.itemContainer, { width: itemWidth }]}>
        {renderItem({ item, index })}
      </View>
    ),
    [itemWidth, renderItem],
  );

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const contentContainerStyle = showPartialItems
    ? [styles.contentContainer, { paddingHorizontal: ITEM_SPACING }]
    : styles.contentContainer;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItemWrapper}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth}
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={contentContainerStyle}
        onScroll={handleScroll}
        onScrollBeginDrag={handleScrollBeginDrag}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        getItemLayout={getItemLayout}
        removeClippedSubviews={true}
        windowSize={3}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Carousel;
