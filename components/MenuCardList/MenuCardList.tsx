import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
// import { categories } from '../../data/dataArrays';
// import { getNumberOfRecipes } from '../../data/MockDataAPI';

import MenuCard from '../MenuCard/MenuCard';

export default function MenuCardList({menuList, onCardClick, onDishButtonClick}:{menuList:any, onCardClick:any, onDishButtonClick:any}){

  function _renderItem({item, index}:{item : any, index: number}) {
    return (
      <MenuCard card={item} onCardClick={onCardClick} onDishButtonClick={onDishButtonClick}/>
    );
  }

  return (
    <View style={styles.menuCardListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={menuList}
        renderItem={_renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}
