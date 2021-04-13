import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {boardingCSS} from '../components/style';
import Onboarding from 'react-native-onboarding-swiper';


const OnBoardingScreen = ({navigation}) => {

  //To Customize a property (i.e Button) refer below
  const Done = ({...props}) => (
    <TouchableOpacity
      style={{padding:20}}
      {...props}
    >
      <Text
      style={{fontSize:18}}
      >Next</Text>
    </TouchableOpacity>
  )

  const Next = ({...props}) => {
    return (
    <TouchableOpacity
      style={{padding:20}}
      {...props}
    >
      <Text
      style={{
        fontSize:18
      }}
      >Next</Text>
  </TouchableOpacity>
    )
  }


  return (
    <Onboarding
     //customized button
    DoneButtonComponent={Done}
    // DotComponent='false'
    // showPagination={false}
    NextButtonComponent={Next}

    bottomBarHighlight = {false}
    //Does not allow users to view the onboarding screen
    onSkip={()=> navigation.replace('PersonalInfo')}
    //Directs users to the Home Screen
    onDone={()=> navigation.navigate('PersonalInfo')}
    pages={[
      {
        backgroundColor: 'pink',
        image: <Image source={require('../assets/images/onboarding-img1.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: 'lightblue',
        image: <Image source={require('../assets/images/onboarding-img2.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#b19cd9',
        image: <Image source={require('../assets/images/onboarding-img3.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

    ]}
  />
  );
}


export default OnBoardingScreen;