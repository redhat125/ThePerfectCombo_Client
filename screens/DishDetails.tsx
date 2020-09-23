import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import DishDetailToOrder from '../components/DishDetailToOrder/DishDetailToOrder';
import {Global_Types} from '../constants/constants';

import {getDishDetailsSync} from '../Mock_Data_And_Apis/dishmenuApis';

export default function DishesDetails() {
  let dishDetails = getDishDetailsSync(Global_Types.orderDishId);
  
  return (
    <View style={styles.container}>
      <DishDetailToOrder details={dishDetails}></DishDetailToOrder>
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
