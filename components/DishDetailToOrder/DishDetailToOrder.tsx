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
import ViewIngredientsButton from '../ViewIngredientsButton/ViewIngredientsButton';
import DishSwitchList from '../DishSwitchList/DishSwitchList';

export default function DishDetailToOrder({details}:{details : any}){
  return(
    <ScrollView style={styles.container}>
      <Image style={styles.imageContainer} source={{ uri: details.cover }} />
      <Text style={styles.dishName}>{details.name}</Text>
      <Text style={styles.infoDescriptionRecipe}>{details.desc}</Text>


      <View style={styles.infoRecipeContainer}>
        <DishSwitchList dishList={details.items}/>
      </View>


      <View style={styles.infoRecipeContainer}>
        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              console.log("orded clicked");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
} 


{/* <ScrollView style={styles.container}>
      <Image style={styles.imageContainer} source={{ uri: details.cover }} />
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.dishName}>{details.name}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{details.desc}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>All items here with optional switches</Text>
        </View>

        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              console.log("orded clicked");
            }}
          />
        </View>
        
      </View>
    </ScrollView> */}