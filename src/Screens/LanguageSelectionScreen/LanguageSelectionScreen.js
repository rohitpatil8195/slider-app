import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext,useEffect} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {LocalizationContext} from '../../services/LocalizationContext';

export const LanguageSelectionScreen = ({navigation}) => {
  const {translations, appLanguage, setAppLanguage} = useContext(
    LocalizationContext,
  );

  useEffect(() => {
   setLang();
 });
  
  const setLang=async()=>{
    let language =await  AsyncStorage.getItem('APP_LANGUAGE');
    if(language != null){
      setAppLanguage(language);
    }
   }
 
  const handleSetLanguage = async language => {
    setAppLanguage(language);
    console.log("LANG>>>>",language)
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <TouchableOpacity onPress={() => navigation.replace('Login')}>
        <Text>{translations.BACK}</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 20, fontSize: 20, textAlign: 'center'}}>
        {translations.LANGUAGE_SETTINGS}
      </Text>

      {translations.getAvailableLanguages().map(item => (
        <View key={item}>
          <TouchableOpacity
            style={{
              paddingVertical: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => handleSetLanguage(item)}>
            <Text style={{fontSize: 16}}>{item}</Text>
            {appLanguage === item ? (
              <Text style={{marginLeft: 30}}>√</Text>
            ) : null}
          </TouchableOpacity>
        </View>
      ))}
      <Button title="Home" onPress={() => navigation.replace('Login')}/>
    </View>
  );
};
