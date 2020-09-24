import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  Animated
} from 'react-native';
import styles from './styles';

import { FontAwesome } from '@expo/vector-icons';

export default function DishSwitch({name, desc, fixed, animationX, fromGroup, switchPress}:{name : string, desc: string, fixed: boolean, animationX: Animated.Value, fromGroup: string, switchPress: any}){
  const transformStyle ={
    transform : [{ 
      translateX : animationX,
    }]
  }
  return(
    <View style={styles.switchContainer}>
      <View style={styles.switchGroup}>
        
        <View style={[styles.switchInfo, {'left':0}]}>
          <FontAwesome name="lock" size={24} color="black"/>
        </View>
        
        <View style={[styles.switchInfo, {'right':0}]}>
          <FontAwesome name="remove" size={24} color="black"/>
        </View>

        
        <Animated.View style={transformStyle} >
          <TouchableOpacity style={styles.switchButton} 
          onPress={fixed?switchPress(animationX, fromGroup, fixed):()=>switchPress(animationX, fromGroup, fixed)
          }>
            <Text>{name}</Text>
          </TouchableOpacity>
        </Animated.View>
        
      </View>
      <Text style={{fontSize:10, marginBottom:5}}>{desc}</Text>
    </View>
  );
}
