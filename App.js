import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from './screens/HomePage';
import OnBoardingScreen from './screens/OnBoardingScreen';

const AppStack = createStackNavigator();

export default function App() {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(()=> {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false)
      }
    })
  }, [])

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode='none'
        >
          <AppStack.Screen name='OnboardingScreen' component={OnBoardingScreen}/>
          <AppStack.Screen name='HomePage' component={HomePage}/>
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <HomePage />
  }
}

