import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import {splash} from '../components/style';

const SplashScreen = () => {
  return (
    <View style={splash.box}>
      <View style={splash.inner}>

      </View>
    </View>


  );
}


export default SplashScreen;