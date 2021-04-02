import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View ,
  Image,
  TextInput,
  Switch,
  Button} from 'react-native';
import {personalCSS} from '../components/style';
// import { NeuSwitch } from 'react-native-neu-element';
import {picker} from '../components/style';

const PregnantPicker = ({value}) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onSelect = (value) => {
    console.log(value)
    setIsEnabled(value)
  }

  useEffect(()=> {
    if (value) {
      setIsEnabled(value)
    }
  }, [value]);

  console.log(isEnabled, 'pick')

  return (
    <View>
      <View style={personalCSS.parameters_view}>
      <Image source={require('../assets/images/onboarding-img3.png')} style={picker.img}/>
        <Text
          style={personalCSS.parameters_text}>
          Pregnant
        </Text>
        <View style={picker.inputBox}>
          <Switch
            trackColor={{ false: "#f4f3f4", true: '#15f4ee' }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#f4f3f4"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={picker.switch}
            onSelect={(value)=> setIsEnabled(isEnabled)}
          />
        </View>
      </View>
    </View>
  )
}


export default PregnantPicker;
