/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { MainStack } from './src/navigation/RootStack';
import { navigationRef } from './src/navigation/utils';
import { store } from './src/store/store';
import ErrorBoundary from './src/utils/ErrorBoundary';
import * as Sentry from '@sentry/react-native';
import { linking } from './src/navigation/linking';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef} linking={linking}>
          <ErrorBoundary>
            <MainStack />
          </ErrorBoundary>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default Sentry.wrap(App);
