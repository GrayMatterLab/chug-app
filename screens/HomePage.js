import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Text,
  View ,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
  Picker,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {intakeCSS, personalCSS, picker, personalIntake} from '../components/style';
import NameInput from './NameInput';
import * as Font from 'expo-font';


const HomePage = ({navigation, value, route}) => {

  const {intakeAmount, metricType} = route.params;

  console.log(intakeAmount, metricType, 'k')



  return (
    <SafeAreaView>
      <Button title='Next'></Button>
      <Text style={{color:'black', backgroundColor: 'lightblue', width: '100%', height: '20%', fontSize:25}}>{intakeAmount} {metricType} </Text>
    </SafeAreaView>
  );
}


export default HomePage;