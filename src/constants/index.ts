import { Dimensions, Platform, StatusBar } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

export const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
export const WINDOW_ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT;

export const IMAGE_HEIGHT_SMALL = 150;
export const IMAGE_HEIGHT_MEDIUM = 200;
export const IMAGE_HEIGHT_LARGE = 300;

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';
