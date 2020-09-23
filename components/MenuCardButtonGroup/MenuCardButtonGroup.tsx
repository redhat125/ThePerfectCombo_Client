import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

import {getDishAvailableSync} from '../../Mock_Data_And_Apis/dishmenuApis';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderBackground } from '@react-navigation/stack';

export default function MenuCardButtonGroup({relatedDish, onPress} : {relatedDish: any, onPress: any}){
  return (
    <View style={styles.menuButtonGroup}>
      {
        relatedDish.map((item: { id: string}) =>{
          console.log(item.id);
          return <View style={styles.menuButton} key={item.id}>
                  <TouchableOpacity onPress={() => onPress(item.id)}>
                    <Text>{item.id}</Text>
                  </TouchableOpacity>
                </View>
        })
      }
    </View>
  );
}