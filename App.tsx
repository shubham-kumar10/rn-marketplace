/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainStack} from './src/navigation/RootStack';
import {navigationRef} from './src/navigation/utils';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
