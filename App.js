import { StatusBar } from 'expo-status-bar';
import TabNavigator from './TabNavigator';
import { AuthProvider } from './hooks/useAuth';
import { SafeAreaView } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';


export default function App() {
  useDeviceContext(tw);
  return (
    <>
        <StatusBar translucent/>
        <SafeAreaView>
          <AuthProvider>
            <TabNavigator/>
          </AuthProvider>
        </SafeAreaView>
    </>
  );
}