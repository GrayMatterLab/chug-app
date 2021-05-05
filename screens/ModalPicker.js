import React, {useState, useEffect} from 'react';
import {
  Text,
  View ,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  StyleSheet,
  TextInput,
  Button} from 'react-native';
import {personalCSS, picker} from '../components/style';
import {Picker} from '@react-native-picker/picker';
// import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModalPicker = ({value, toggleModal, onSelect, onChangeText, label, selectedValue, isVisible, items, onValueChange, onPress, onPressIn, itemMapper, itemContainer}) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

  // console.log(getWeight, 'weight')

  // const items =[];
  // for (var i = 40; i <= 500; i++) {
  //   items.push(i.toString() + ' lb')
  // }

  // const weightInfo = () => {
  //   getWeight(pickerValue, 'childWeight')
  // }

  toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  onSelect = (value) => {
    console.log(value)
    setPickerValue(value)
  };

  const onChange = (value) => {
    setPickerValue(value)
  };

  useEffect(()=> {
    if (value) {
      setPickerValue(value)
    }
  }, [value]);

  itemMapper = (items) => {
    return items.map((item)=> (
      <Picker.Item value={item} key={item} label={item} color='#04303d'/>
    ))
  }

  return (

    // <View>
    //   <Pressable onPressIn={onPressIn}>
    //     <View style={picker.inputBox} pointerEvents='none'>
    //       <TextInput
    //         style={picker.textInput}
    //         placeholderTextColor='#2596be'
    //         placeholder={pickerValue}
    //         onChangeText={onChangeText}
    //         caretHidden={true}
    //         editable={false}
    //         />
    //     </View>
    //   </Pressable>

      <Modal isVisible={isVisible}>
        <View style={picker.container}>
          <View style={picker.pickerContainer}>
            <View style={picker.header}>
              <TouchableOpacity onPressIn={onPressIn}>
                <Icon
                  name='close'
                  size={30}
                  color='grey'/>
              </TouchableOpacity>

              <Text
                style={picker.txt}>
                {label=label}
              </Text>

              <TouchableOpacity
                onPress={onPress}>
                <Icon
                  name='done'
                  size={30}
                  color='grey'/>
              </TouchableOpacity>
            </View>

            <Picker
              selectedValue={selectedValue}
              onValueChange={onValueChange}
            >
              {itemContainer = itemContainer}
            </Picker>
          </View>
        </View>
      </Modal>

  )
}


export default ModalPicker;
