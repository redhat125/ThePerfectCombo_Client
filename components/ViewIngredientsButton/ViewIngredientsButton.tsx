import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import styles from './styles';

export default function ViewIngredientsButton({onPress}:{onPress : any}) {
  return (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>I'm humgry!</Text>
      </View>
    </TouchableHighlight>
  );
}