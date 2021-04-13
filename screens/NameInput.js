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

const NameInput = () => {

  const [text, setText] = useState('');

  console.log(text)
  return (
    <TouchableOpacity>
      <View style={personalCSS.parameters_view} >
        <Text
          style={[personalCSS.parameters_text, {marginLeft: 20}]}>
          Name
        </Text>
        <TextInput
          style={{marginRight: 20, borderBottomWidth: 1, borderBottomColor:'#00CCFF', width: '60%', color:'#2596be', fontSize:20,}}
          placeholder='Type your name here...'
          onChangeText={text => setText(text)}
          defaultValue={text}
        />

      </View>
    </TouchableOpacity>
  )
}


export default NameInput;
