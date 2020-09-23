import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

import { FontAwesome } from '@expo/vector-icons';

export default function DishSwitch({dish}:{dish : any}){
  return(
    <View style={styles.switchContainer}>
      <View style={styles.switchGroup}>
        <View style={[styles.switchInfo, {'left':0}]}>
          <FontAwesome name="lock" size={24} color="black"/>
        </View>
        
        <View style={[styles.switchInfo, {'right':0}]}>
          <FontAwesome name="remove" size={24} color="black"/>
        </View>
        
          <View style={{backgroundColor:'#000'}}>
            <TouchableOpacity style={styles.switchButton} onPress={()=>console.log("switch")}>
              <Text>Items</Text>
            </TouchableOpacity>
          </View>
        
      </View>
    </View>
  );
}
