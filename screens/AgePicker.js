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
  Button} from 'react-native';
import {personalCSS} from '../components/style';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {picker} from '../components/style';

const AgePicker = ({value, key}) => {
  const items =[];

  for (var i = 4; i <= 100; i++) {
    items.push(i.toString())
  }

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

  return (
    <TouchableOpacity onPress={toggleModal}>
      <View style={personalCSS.parameters_view} >
        <View style={picker.imgContainer}>
          <Image source={require('../assets/images/onboarding-img3.png')} style={picker.img}/>
        </View>
        <Text
          style={personalCSS.parameters_text}>
          Age
        </Text>

        <Pressable onPress={toggleModal}>
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
                  Age
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

export default AgePicker;
