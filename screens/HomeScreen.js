import React from 'react';

import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return <View>
    <Text>
      This is HomeScreen
    </Text>
    <Button title="Go to Chat"
            onPress={() => navigation.navigate('Chat')}>
      Go to Chat Screen
    </Button>
  </View>;
};

export default HomeScreen;
