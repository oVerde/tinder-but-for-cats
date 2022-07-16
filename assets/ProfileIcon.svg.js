import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';

const image = ( props ) => (
    <View {...props}>
      <Svg>
        <Path
            d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1 0 10 2.5a3.333 3.333 0 0 0 0 6.667Z"
            stroke="#434141"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </Svg>
    </View>
);

const ProfileIcon = React.memo(image);
export default ProfileIcon;
