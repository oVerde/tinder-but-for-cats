import StackNavigator from './StackNavigator';
import AuthProvider from './hooks/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator/>
        </AuthProvider>
      </NavigationContainer>
  );
}