import { StatusBar } from 'expo-status-bar';
import TabNavigator from './TabNavigator';
import { AuthProvider } from './hooks/useAuth';
import { SafeAreaView } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DevSupport } from '@react-buddy/ide-toolbox';


export default function App() {
  useDeviceContext(tw);
  return (
      <DevSupport>
        <GestureHandlerRootView>
          <StatusBar translucent/>
          <SafeAreaView>
            <AuthProvider>
              <TabNavigator/>
            </AuthProvider>
          </SafeAreaView>
        </GestureHandlerRootView>
      </DevSupport>
  );
}