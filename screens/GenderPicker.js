import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View ,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  DismissKeyboard,
  Button} from 'react-native';
import {personalCSS} from '../components/style';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
// import { NeuInput, NeuView } from 'react-native-neu-element';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {picker} from '../components/style';
import { Ionicons } from '@expo/vector-icons';
import ModalPicker from './ModalPicker';

const GenderPicker = ({getGender, value}) => {

  // toggleModal, onSelect, onChange, label, selectedValue, isVisible, items, onValueChange, onPress, onPressIn, itemMapper}

  console.log(getGender, 'show')

  const items = ['None','Female', 'Male'];
  const [isModalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

  const genderInfo = () => {
    getGender(pickerValue, 'child')
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSelect = (value) => {
    console.log(value)
    setPickerValue(value)
  };

  useEffect(()=> {
    if (value) {
      setPickerValue(value)
    }
  }, [value]);


  const renderImage = () => {
    if (pickerValue === 'Male') {
      return (
        <Image source={require('../assets/images/onboarding-img2.png')} style={picker.img}/>
      )
    } else {
      return (
        <Image source={require('../assets/images/onboarding-img1.png')} style={picker.img}/>
      )
    }
  }

  // const itemMapper = (items) => {
  //   return items.map((item)=> (
  //     <Picker.Item value={item} key={item} label={item} color='#04303d'/>
  //   ))
  // }

  console.log(pickerValue);

  return (

    <TouchableOpacity onPressIn={toggleModal}>
      <View style={personalCSS.parameters_view} >
        <View style={picker.imgContainer}>
          {renderImage()}
        </View>
        <Text
          style={personalCSS.parameters_text}>
          Gender
        </Text>

        <Pressable onPressIn={toggleModal}>
          <View style={picker.inputBox} pointerEvents='none'>
            <TextInput
              style={picker.textInput}
              placeholderTextColor='#2596be'
              placeholder={pickerValue}
              onChangeText={() => pickerValue}
              caretHidden={true}
              editable={false}
              />
          </View>
        </Pressable>

      {/* <View  isVisible={isModalVisible}>
        <ModalPicker
          // onPressIn={toggleModal}
          // isVisible={isModalVisible}
          items={pickerItems}
          // onChangeText={() => pickerValue}
          label='Gender'
          selectedValue={pickerValue}
          onValueChange={(value)=> setPickerValue(value)}
          onPress={()=> {
            onSelect(pickerValue);
            toggleModal();
            // weightInfo()
          }}
          itemContainer={itemMapper(pickerItems)}
        />
      </View> */}

        <Modal isVisible={isModalVisible}>
          <View style={picker.container}>
            <View style={picker.pickerContainer}>
              <View style={picker.header}>
                <TouchableOpacity onPress={toggleModal}>
                  <Icon
                    name='close'
                    size={30}
                    color='grey'/>
                </TouchableOpacity>

                <Text
                  style={picker.txt}>
                  Gender
                </Text>

                <TouchableOpacity
                  onPress={()=> {
                    onSelect(pickerValue);
                    toggleModal();
                    genderInfo()
                    }}>
                  <Icon
                    name='done'
                    size={30}
                    color='grey'/>
                </TouchableOpacity>
              </View>

              <Picker
                selectedValue={pickerValue}
                onValueChange={(value)=> setPickerValue(value)}
              >
                {items.map((item)=> (
                  <Picker.Item value={item} key={item} label={item} color='#04303d'/>
                ))}
              </Picker>
            </View>
          </View>
        </Modal>

      </View>
    </TouchableOpacity>
  )
}


export default GenderPicker;
