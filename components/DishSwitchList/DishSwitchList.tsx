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
import DishSwitch from '../DishSwitch/DishSwitch';

export default function DishSwitchList({dishList}:{dishList : Array<any>}){
  let nn = [[{'i1':1, 'i2':3}, {'i1':2}, {'i2':6}], {'i3':1},{'i5':1}, [{'i4':1}, {'i6':1}]];
  return(
    <View style={styles.infoRecipeContainer}>
      {
        dishList.map((item)=>{
          if(Array.isArray(item)){
            return (
              <View style={[styles.groupItemsContainer, {backgroundColor:'red'}]}>
                {
                  item.map((opItem)=>{
                    return <DishSwitch dish={opItem}/>
                  })
                }
              </View>
            )
          }
          else{
            return (
              <DishSwitch dish={item}/>
            )
          }
        })
      }
    </View>
  );
}
