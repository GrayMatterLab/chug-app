import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, Text, View , SafeAreaView, TouchableOpacity, Switch, Image, ImageBackground, ScrollView, Modal, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {personalCSS} from '../components/style';
import NameInput from './NameInput';
import GenderPicker from './GenderPicker';
import AgePicker from './AgePicker';
import ActivityPicker from './ActivityPicker';
import WeightPicker from './WeightPicker';
import PregnantPicker from './PregnantPicker';
import BreastfeedingPicker from './BreastfeedingPicker';
import AppleHealthPicker from './AppleHealthPicker';
import * as Font from 'expo-font'

const PersonalParameters = ({navigation, value}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [nameData, setNameData] = useState(null);
  const getName = (info) => {
    console.log(info, 'parent');
    setNameData(info);
  }

  const [genderData, setGenderData] = useState(null)
  const getGender = (info) => {
    console.log(info, 'parent');
    setGenderData(info);
  }

  const [weightData, setWeightData] = useState(null);
  const getWeight = (info) => {
    console.log(info, 'parent');
    setWeightData(info);
  }

  const [activityData, setActivityData] = useState(null);
  const getActivity = (info) => {
    console.log(info, 'parent');
    setActivityData(info);
  }

  const [pregnancyData, setPregnancyData] = useState(false);
  const getPregnancyInfo = (info) => {
    console.log(info, 'parent');
    setPregnancyData(info);
  }

  const [BreastfeedingData, setBreastfeedingData] = useState(false);
  const getBreastfeedingInfo = (info) => {
    console.log(info, 'parent');
    setBreastfeedingData(info);
  }
  const [AppleHealthData, setAppleHealthData] = useState(false);
  const getAppleHealthInfo = (info) => {
    console.log(info, 'parent');
    setAppleHealthData(info);
  }



// useEffect(() => {
//   (async () => await Font.loadAsync({
//     ComfortaaRegular: require('../assets/fonts/Comfortaa-Regular.ttf'),
//     ComfortaaBold: require('../assets/fonts/Comfortaa-Bold.ttf'),
//     ComfortaaSemiBold : require('../assets/fonts/Comfortaa-SemiBold.ttf'),
//     ComfortaaMedium : require('../assets/fonts/Comfortaa-Medium.ttf'),
//     NotoSansRegular: require('../assets/fonts/NotoSansJP-Regular.otf'),
//     NotoSansMedium: require('../assets/fonts/NotoSansJP-Medium.otf'),
//     NotoSansBold: require('../assets/fonts/NotoSansJP-Bold.otf'),
//     MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
//   }))();
//    }, [])


  return (
    <SafeAreaView style={personalCSS.container}>

      <View>
        <Text style={personalCSS.title}>Enter Personal Parameters</Text>
       </View>

      <ScrollView style={personalCSS.box2}>
        <NameInput getName={getName}/>
        <GenderPicker getGender={getGender}/>
        <AgePicker />
        <WeightPicker getWeight={getWeight}/>
        <ActivityPicker getActivity={getActivity}/>
        <PregnantPicker getPregnancyInfo={getPregnancyInfo}/>
        <BreastfeedingPicker getBreastfeedingInfo={getBreastfeedingInfo}/>
        {/* <AppleHealthPicker getAppleHealthInfo={getAppleHealthInfo}/> */}
      </ScrollView>

        <View style={personalCSS.bottomBar}>
          <TouchableOpacity style={{alignSelf: 'flex-end', padding: 20}} onPress={()=> navigation.navigate('PersonalIntake', {
            genderType: genderData,
            nameType: nameData,
            weightType: weightData,
            activityType: activityData,
            pregnancyType: pregnancyData,
            breastfeedingType: BreastfeedingData,
            appleHealthType: AppleHealthData
          })}>
            <Text style={{color: 'black', fontSize: 18}}>Next</Text>
          </TouchableOpacity>
        </View>

    </SafeAreaView>
  );
}


export default PersonalParameters;