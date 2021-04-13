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

const GenderPicker = ({value}) => {

  const items = ['None','Female', 'Male'];
  const [isModalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSelect = (value) => {
    console.log(value)
    setPickerValue(value)
  }

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

  console.log(pickerValue)

  return (
    <TouchableOpacity onPress={toggleModal}>
      <View style={personalCSS.parameters_view} >
        <View style={picker.imgContainer}>
         {renderImage()}
        </View>
        <Text
          style={personalCSS.parameters_text}>
          Gender
        </Text>

          <Pressable onPress={toggleModal}>
            <View style={picker.inputBox} pointerEvents='none'>
              <TextInput
                style={picker.textInput}
                placeholderTextColor='#2596be'
                placeholder={pickerValue}
                onChangeText={pickerValue}
                caretHidden={true}
                editable={false}
                />
            </View>
          </Pressable>

        <Modal isVisible={isModalVisible} transparent={true}>
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
                  <Picker.Item value={item} label={item} color='#04303d'/>
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
