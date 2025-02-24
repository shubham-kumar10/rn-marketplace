// jest.setup.js
import '@testing-library/jest-native';
import { jest } from '@jest/globals';

// jest.mock('@react-navigation/native', () => ({
//   useNavigation: () => ({
//     navigate: jest.fn(),
//     goBack: jest.fn(),
//   }),
//   useRoute: () => ({
//     params: {},
//   }),
// }));

// jest.mock(
//   'react-native/Libraries/Components/StatusBar/StatusBar',
//   () => 'StatusBar',
// );

// jest.mock('react-native-safe-area-context', () => ({
//   SafeAreaProvider: jest.fn(({ children }) => children),
//   SafeAreaView: jest.fn(({ children }) => children),
//   useSafeAreaInsets: () => ({
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//   }),
// }));

// jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

jest.mock('react-native-fast-image', () => 'FastImage');
