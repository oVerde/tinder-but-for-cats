// @flow
import * as React from "react";
import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { snapPoint } from "react-native-redash";
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming
} from "react-native-reanimated";
import tw from "twrnc";

const { width: wWidth, height } = Dimensions.get("window");

const SNAP_POINTS = [ -wWidth, 0, wWidth ];
const aspectRatio = 722 / 368;
const CARD_WIDTH = wWidth - 40;
const CARD_HEIGHT = CARD_WIDTH;
const IMAGE_WIDTH = CARD_WIDTH * 0.95;
const DURATION = 150;

// interface CardProps {
//   card: any,
//   shuffleBack: Animated.SharedValue<boolean>;
//   index: number;
// }

const Card = ( { card, shuffleBack, index } ) => {
  const offset = useSharedValue({ x: 0, y: 0 });
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-height);
  const scale = useSharedValue(1);
  const rotateZ = useSharedValue(0);
  const delay = index * DURATION;
  const theta = -10 + Math.random() * 20;
  useEffect(() => {
    translateY.value = withDelay(
        delay,
        withTiming(0,
            { duration: DURATION, easing: Easing.inOut(Easing.ease) }),
    );
    rotateZ.value = withDelay(delay, withSpring(theta));
  }, [ delay, index, rotateZ, theta, translateY ]);
  useAnimatedReaction(
      () => shuffleBack.value,
      ( v ) => {
        if ( v ) {
          const duration = 150 * index;
          translateX.value = withDelay(
              duration,
              withSpring(0, {}, () => {
                shuffleBack.value = false;
              }),
          );
          rotateZ.value = withDelay(duration, withSpring(theta));
        }
      },
  );
  const gesture = Gesture.Pan().onBegin(() => {
    offset.value.x = translateX.value;
    offset.value.y = translateY.value;
    rotateZ.value = withTiming(0);
    scale.value = withTiming(1.1);

  }).onUpdate(( { translationX, translationY } ) => {
    translateX.value = offset.value.x + translationX;
    translateY.value = offset.value.y + translationY;

  }).onEnd(( { velocityX, velocityY } ) => {
    const dest = snapPoint(translateX.value, velocityX, SNAP_POINTS);
    translateX.value = withSpring(dest, { velocity: velocityX });
    translateY.value = withSpring(0, { velocity: velocityY });
    scale.value = withTiming(1, {}, () => {
      const isLast = index === 0;
      const isSwipedLeftOrRight = dest !== 0;
      if ( isLast && isSwipedLeftOrRight ) {
        shuffleBack.value = true;
      }
    });
  });

  const style = useAnimatedStyle(() => ( {
    transform: [
      { perspective: 1500 },
      { rotateX: '10deg' },
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotateY: `${rotateZ.value / 10}deg` },
      { rotateZ: `${rotateZ.value}deg` },
      { scale: scale.value },
    ],
  } ));
  return (
      <View style={styles.container} pointerEvents="box-none">
        <GestureDetector gesture={gesture}>
          <Animated.View style={[ styles.card, style ]}>
            <Image
                source={{ uri: card }}
                style={{
                  width: IMAGE_WIDTH,
                  height: IMAGE_WIDTH * aspectRatio,
                }}
                resizeMode="contain"
            />
          </Animated.View>
        </GestureDetector>
      </View>
  );
};

const HomeScreen = ( props: React.ElementProps<Object> ): React.Element<Object> => {
  const [ data, setData ] = useState([]);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const getCatsBreeds = async() => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/breeds',
          requestOptions);
      return setData(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCatsBreeds();
  }, []);

  const shuffleBack = useSharedValue(false);

  return (
      <View style={[
        tw`
          z-20 
          w-full 
          h-full 
          bg-[#E5E5E5] 
          justify-center 
          items-center`,
        styles.container,
      ]}>
        {data.slice(0, 10).map(( card, index ) => (
            <Card
                style={tw`
                      z-30 
                      bg-slate-200
                      `}
                card={card.image.url}
                key={index}
                index={index}
                shuffleBack={shuffleBack}
            />
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.84,
    elevation: 9,
  },
});

export default HomeScreen;
