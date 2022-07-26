// @flow
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import TabNavigator from './TabNavigator';
import { AuthProvider } from './hooks/useAuth';
import { SafeAreaView } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DevSupport } from '@react-buddy/ide-toolbox';


/**
 * App.js
 * @return {React.Node} The root component.
 * @constructor
 */
export default function App(): React.Node {
  useDeviceContext(tw);
  return (
    <DevSupport>
      <GestureHandlerRootView>
        <StatusBar translucent />
        <SafeAreaView>
          <GraphQLProvider>
            <AuthProvider>
              <TabNavigator/>
            </AuthProvider>
          </GraphQLProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </DevSupport>
  );
}