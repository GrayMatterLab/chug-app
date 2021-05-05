import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
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
  Pressable,
  TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {intakeCSS, personalCSS, picker, personalIntake} from '../components/style';
import GenderPicker from './GenderPicker';
import AgePicker from './AgePicker';
import ActivityPicker from './ActivityPicker';
import WeightPicker from './WeightPicker';
import PregnantPicker from './PregnantPicker';
import BreastfeedingPicker from './BreastfeedingPicker';
import AppleHealthPicker from './AppleHealthPicker';
import NameInput from './NameInput';
import * as Font from 'expo-font';
// import {Picker} from '@react-native-picker/picker';
// import Modal from 'react-native-modal';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


const PersonalIntake = ({navigation, value, route}) => {

  const {genderType, nameType, weightType, activityType, pregnancyType, breastfeedingType} = route.params;
  const [textValue, setTextValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('oz');
  const [intakeVal, setIntakeVal] = useState(null);
  const [totalIntake, setTotalIntake] = useState(null)

  const averageWaterIntake = (num) => {
    var weight = num.split(' ');
    return Math.round(parseInt(weight[0]) * 0.67);
  }

  const activityLevel = (level) => {
    var weight = averageWaterIntake(weightType);

    if (level.localeCompare('Just Sleep') === 0) {
      return weight += 0;
    } else if (level.localeCompare('30 min/week') === 0) {
      return weight += 12;
    } else if (level.localeCompare('1 hour/week') === 0) {
      return weight += 24;
    } else if (level.localeCompare('2 hour/week') === 0) {
      return weight += 120;
    } else if (level.localeCompare('3 hour/week') === 0) {
      return weight += 180;
    } else if (level.localeCompare('4 hour/week') === 0) {
      return weight += 240;
    } else {
      return weight += 0;
    }
  }

  var isFemaleTabs = (gender) => {
    var level = activityLevel(activityType);

    if (gender === 'Female') {
      if (pregnancyType === true) {
       return level += 10;
      } else if (breastfeedingType === true) {
        return level += 30;
      } else {
        return level;
      }
    } else {
      return level;
    }
  }

  var myIntakeValue = isFemaleTabs(genderType);

  useEffect(()=> {
    setIntakeVal(myIntakeValue);
    setTextValue(textValue);
    console.log(textValue, 'test')
    setTotalIntake(textValue ? textValue : myIntakeValue);
  }, [myIntakeValue, textValue, selectedValue]);

  return (
    <SafeAreaView style={intakeCSS.container}>

      <View elevation={5} style={intakeCSS.titleContainer}>
        <View style={intakeCSS.titleBox}>
          <Text  style={intakeCSS.title} >Welcome,</Text>
          <Text  style={intakeCSS.title} >{nameType.trim()}!</Text>
        </View>
      </View>

      <View style={intakeCSS.textBox}>
        <View style={intakeCSS.Box1}>
          <Text style={intakeCSS.Box1_Text}>Based on the information you have provided, it is recommended you drink</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[intakeCSS.Box1_Text, {fontWeight: '700'}]}>{intakeVal} oz</Text>
            <Text style={intakeCSS.Box1_Text}> of water per day!</Text>
          </View>
        </View>

        <View style={intakeCSS.Box2}>
          <Text style={intakeCSS.Box1_Text}>If you wish to customize this information, please enter it below</Text>
        </View>

          <View style={personalIntake.container}>
            <View style={personalIntake.box}>
              <TextInput
                style={personalIntake.textInput1}
                placeholder='Enter...'
                value={textValue}
                placeholderTextColor='#2596be'
                // placeholder={pickerValue}
                onChangeText={setTextValue}
                maxLength={3}
              />
            </View>

            {/* need to work on changing the state so that it renders on the next page based on the users selection, currently only prints 'oz' */}

            <View style={personalIntake.box}>
              <DropDownPicker
                items={[
                  {label:'oz', value:'oz'},
                  {label:'ml', value:'ml'},
                  {label:'L', value:'L'}
                ]}
                defaultValue={selectedValue}
                containerStyle={{height: 50, width: 70}}
                style={personalIntake.dropdownBorder}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                labelStyle={{
                  fontSize: 24,
                  textAlign: 'center',
                  color: 'grey'
                }}
                dropDownStyle={{backgroundColor:'white', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderColor: '#00CCFF'}}
                onChangeItem={item => {setSelectedValue(selectedValue); console.log(item.value)}}
              />
            </View>
          </View>
      </View>

      <View style={intakeCSS.bottomBar}>
        <TouchableOpacity style={{alignSelf: 'flex-end', padding: 20}} onPress={()=> navigation.navigate('HomePage', {
          intakeAmount: totalIntake,
          metricType: selectedValue
        })}>
          <Text style={{color: 'black', fontSize: 18}}>Next</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}


export default PersonalIntake;