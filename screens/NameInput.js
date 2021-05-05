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

const NameInput = ({value, getName}) => {
  const [textInput, setTextInput] = useState('');

  console.log(getName, 'name');

  const nameInfo = () => {
    getName(textInput, 'nameInput')
  }

  // const handleValueChange = () => {
  //   setTextInput(value)
  // }

  // useEffect(() => {
  //   handleValueChange();
  // }, [textInput]);

  useEffect(()=> {
    getName(textInput);
    console.log(textInput, 'input');
  }, [textInput]);

  console.log(textInput)

  return (
    <View>
      <View style={personalCSS.parameters_view}>
        <Text
          style={[personalCSS.parameters_text, {marginLeft: 20, paddingRight: 30}]}>
          Name
        </Text>
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor:'#00CCFF', color:'#2596be', fontSize:20, flex: 1, marginRight: 20}}
          placeholder='Enter your first name...'
          onChangeText={value => setTextInput(value)}
        />

      </View>
    </View>
  )
}


export default NameInput;
