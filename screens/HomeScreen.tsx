import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import MenuCardList from '../components/MenuCardList/MenuCardList';
import {Global_Types} from '../constants/constants';

import {getDishMenuListSync} from '../Mock_Data_And_Apis/dishmenuApis';

export default function HomeScreen({ navigation }:{navigation:any}) {

  let menuListObj = getDishMenuListSync('rateType');

  function goToDishesScreen(typeId: string){
    console.log('navigate to DishesScreen clicked dishes: '+typeId);
    Global_Types.dishesTypeId = typeId;
    navigation.navigate('DishesScreen');
  }

  function goToDishDetails(id: string){
    console.log('navigate to DishDetails clicked dishes: '+id);
    Global_Types.orderDishId = id;
    navigation.navigate('DishDetails');
  }


  return (
    <View style={styles.container}>
      <MenuCardList menuList={menuListObj} onCardClick={goToDishesScreen} onDishButtonClick={goToDishDetails}></MenuCardList>
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
