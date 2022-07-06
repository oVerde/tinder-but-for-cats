import React from 'react';

import { View } from 'react-native';

const AuthProvider = ({children}) => {
  return (
      <View>
        {children}
      </View>
  );
};

export default AuthProvider;
