import React from 'react';
import { ColorValue } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = (color: ColorValue, name: string) => {
  return <Ionicons name={name} color={color as ColorValue} size={22} />;
};

export default Icon;
