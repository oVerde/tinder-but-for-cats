import React, { useLayoutEffect } from 'react';

import {
  Button,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';
import PawnIcon from '../assets/PawnIcon.svg';
import ChatIcon from '../assets/ChatIcon.svg';
import ProfileIcon from '../assets/ProfileIcon.svg';

const HomeScreen = () => {

  const tw = useTailwind();
  const navigation = useNavigation();

  // useLayoutEffect(() => {null}, []);

  return (
      <SafeAreaView>
        <Text>
          This is HomeScreen
        </Text>
        <Button title="Go to Chat"
                onPress={() => navigation.navigate('Chat')}>
          Go to Chat Screen
        </Button>

        {/* Bottom navigation menu */}
        <View style={tw(
            'flex row gap-24 align-items justify-content bg-white drop-shadow-xl')}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <PawnIcon style={tw('h-20 w-20')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <ChatIcon style={tw('h-20 w-20')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <ProfileIcon style={tw('h-20 w-20')}/>
          </TouchableOpacity>
        </View>

      </SafeAreaView> );
};

export default HomeScreen;
