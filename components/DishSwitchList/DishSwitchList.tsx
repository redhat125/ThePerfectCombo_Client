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
import DishSwitch from '../DishSwitch/DishSwitch';
import {getItemListArr, getItemDetailsSync, getProperty} from '../../Mock_Data_And_Apis/dishmenuApis';
import {getSwitchDetail} from '../../Utils/AppUtils';
import {SCREEN_WIDTH} from '../../constants/constants';

export default function DishSwitchList({dishList}:{dishList : Array<any>}){
  // [[{'i1':1, 'i2':3}, {'i1':2}, {'i2':6}], {'i3':1},{'i5':1}, [{'i4':1}, {'i6':1}]];
  const itemDetails = getItemDetailsSync(getItemListArr(dishList));
  let counter = 0 ,opCounter = 0;;
  const itemGroupAnim: {[k: string]: any} = {};
  let dishGroup: string;

  function switchPressed(animationX: Animated.Value, fromGroup: string, isFixed: boolean){
    console.log("Animation clicked "+fromGroup, isFixed);
    //if(!isFixed){
      itemGroupAnim[fromGroup].forEach((animItem: Animated.Value)=>{
        Animated.timing(animItem,{
          toValue : 0,
          duration : 500,
          useNativeDriver: true
        }).start();
      });

      Animated.timing(animationX,{
        toValue : SCREEN_WIDTH/10,
        duration : 500,
        useNativeDriver: true
      }).start();

      
    //}
  }








  return(
    <View style={styles.infoRecipeContainer}>
      {
        dishList.map((item)=>{
          if(Array.isArray(item)){
            dishGroup = 'dishGroup'+counter++;
            const dishGroupArr : Array<Animated.Value> = [];
            itemGroupAnim[dishGroup] = dishGroupArr;

            return (
              <View key={dishGroup} style={[styles.groupItemsContainer]}>
                <Text style={{fontSize:10, marginTop:-5, backgroundColor:'#fff'}}>Flexible like Elastica..</Text>
                {
                  item.map((opItem)=>{
                    const animaX = new Animated.Value(0);
                    dishGroupArr.push(animaX);
                    const switchDetail = getSwitchDetail(opItem, itemDetails);
                    return <DishSwitch key={'dish'+opCounter++} name={switchDetail.name} desc={switchDetail.desc} fixed={false} animationX={animaX} fromGroup={dishGroup} switchPress={switchPressed}/>
                  })
                }
              </View>
            )
          }
          else{
            dishGroup = 'dish'+counter++;
            const animaX = new Animated.Value(0);
            itemGroupAnim[dishGroup] = [animaX];

            const switchDetail = getSwitchDetail(item, itemDetails);
            return <DishSwitch key={dishGroup} name={switchDetail.name} desc={switchDetail.desc} fixed={true} animationX={animaX} fromGroup={dishGroup} switchPress={switchPressed}/>
          }
        })
      }
    </View>
  );
}
