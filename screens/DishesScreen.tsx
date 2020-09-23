import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import DishCardList from '../components/DishCardList/DishCardList';
import {Global_Types} from '../constants/constants';

import {getDishAvailableSync} from '../Mock_Data_And_Apis/dishmenuApis';

export default function DishesScreen({ navigation }:{navigation:any}) {
  let menuListObj = getDishAvailableSync(Global_Types.dishesTypeId);

  function goToDishDetails(id: string){
    console.log('navigate to DishDetails clicked dishes: '+id);
    Global_Types.orderDishId = id;
    navigation.navigate('DishDetails');
  }
  
  return (
    <View style={styles.container}>
      <DishCardList relatedDish={menuListObj} onCardPress={goToDishDetails}></DishCardList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
