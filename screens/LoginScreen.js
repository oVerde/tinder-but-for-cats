import React from 'react';

import { Text, StyleSheet, View } from 'react-native';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
  const { user } = useAuth();
  return (
      <View style={styles.loginScreen}>
        <Text style={styles.loginHeader}>
          { user ? (`02`) : (`Sign in`) })}
        </Text>
      </View>

  );
};

const styles = StyleSheet.create({

  loginScreen: {
    flex: 1,
    flexDirection: 'column', //just to make sure it's a column
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },

  loginHeader: {
    fontFamily: 'Nunito Sans',
    fontSize: 126,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 32,
  },
});

export default LoginScreen;
