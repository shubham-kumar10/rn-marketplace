/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ErrorTracker from './src/packages/logging/logging';

ErrorTracker.init();
AppRegistry.registerComponent(appName, () => App);
