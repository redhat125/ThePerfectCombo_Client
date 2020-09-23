import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

import {getDishAvailableSync} from '../../Mock_Data_And_Apis/dishmenuApis';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import MenuCardButtonGroup from '../MenuCardButtonGroup/MenuCardButtonGroup';

export default function MenuCard({card, onCardClick, onDishButtonClick} : {card: any, onCardClick: any, onDishButtonClick:any}){
  let dishAvailableArr = getDishAvailableSync(card.id);

  return (
    <View style={styles.menuCardContainer}>
      <TouchableHighlight underlayColor='rgba(73,182,77,0.4)' onPress={() => onCardClick(card.id)}>
        <View>
          <Image style={styles.menuCardPhoto} source={{ uri: card.cover }} />
          <Text style={styles.menuCardName}>{card.name}</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.menuCardInfo}>
        <Text>{card.desc}</Text>
        <MenuCardButtonGroup relatedDish={dishAvailableArr} onPress={onDishButtonClick}/>
      </View>
    </View>
  );
}