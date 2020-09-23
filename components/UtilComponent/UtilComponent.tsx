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

import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
  
  function TabBarIcon(props: { name: string; color: string }) {
    return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props}/>
  }