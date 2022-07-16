import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import tw from 'twrnc';

import {
  Image,
  Dimensions,
  FlatList,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const Tabs = () => {
  return (
      <View style={{
        width,
        alignItems: 'center',
        bottom: '15%',
      }}>
        <View style={tw`
          w-[156px]
          h-[44px]
          rounded-[35px]
          flex-row
          items-center
          content-center
          justify-around
          bg-white
          shadow-[#bfbfc0]
          shadow-offset-[10px]/[16px]
          shadow-opacity-10
          shadow-radius-1
          z-10
        `}>
          <View>
            <Image source={require('./assets/pawn-icon.png')}
                   style={tw.style(`
                   flex-1
                   w-5
                   h-5`,
                   { resizeMode: 'contain' },
                   )}/>
          </View>
          <View>
            <Image source={require('./assets/chat-icon.png')}
                   style={tw.style(`
                   flex-1
                   w-5
                   h-5`,
                   { resizeMode: 'contain' },
                   )}/>
          </View>
          <View>
            <Image source={require('./assets/user-icon.png')}
                   style={tw.style(`
                   flex-1
                   w-5
                   h-5`,
                   {resizeMode: 'contain'}
                   )}/>
          </View>
        </View>
      </View>
  );
};

const TabNavigator = () => {
  return (
      <>
        <View style={tw`flex-row -z-10`}>
          <FlatList
              style={{ flex: 1, width, height }}
              data={[
                { key: 2, screen: <ChatScreen/> },
                { key: 1, screen: <HomeScreen/> },
                { key: 3, screen: <LoginScreen/> },
              ]}
              onTouchStart={() => {
                console.log('touch start');
              }}
              onTouchEnd={() => {
                console.log('touch end');
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              bounces={false}
              bouncesZoom={false}
              keyExtractor={( item ) => item.key}
              renderItem={( { item } ) => {
                return (
                    <View style={{ width, height }}>
                      {item.screen}
                    </View>
                );
              }
              }/>
        </View>

        <Tabs/>

      </>
  );
};

export default TabNavigator;