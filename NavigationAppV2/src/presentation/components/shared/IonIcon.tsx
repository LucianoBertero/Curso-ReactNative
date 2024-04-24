import React from 'react';
import {View} from 'react-native-reanimated/lib/typescript/Animated';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  size?: number;
  name: string;
  color?: string;
}

const IonIcon = ({name, size = 20, color = 'black'}: Props) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} />;
    </View>
  );
};

export default IonIcon;
