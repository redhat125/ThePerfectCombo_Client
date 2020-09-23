import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

export default function MenuDishCard({dish, onCardClick} : {dish: any, onCardClick: any}){
  return (
    <View>
      <View style={styles.container}>
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => onCardClick(dish.id)}>
          <Image style={styles.photo} source={{ uri: dish.cover }} />
        </TouchableHighlight>
        <Text style={styles.title}>{dish.name}</Text>
        <Text style={styles.category}>{dish.desc}</Text>
      </View>
    </View>
  );
}
