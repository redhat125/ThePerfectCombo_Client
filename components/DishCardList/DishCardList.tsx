import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  FlatList
} from 'react-native';
import styles from './styles';
import DishCard from '../DishCard/DishCard';

export default function DishCardList({relatedDish, onCardPress} : {relatedDish: any; onCardPress :any}){
  function _renderItem({ item , index} : {item:any, index: number}) {
    return (
      <DishCard dish={item} onCardClick={onCardPress}/>
    );
  };
  
  return (
    <View style={styles.dishCardListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={relatedDish}
        renderItem={_renderItem}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );


  
}




