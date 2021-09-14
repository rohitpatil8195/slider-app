import React, { Component } from 'react';
import {Button, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LocalizationContext} from '../../services/LocalizationContext'; 

class Login extends Component{
    static contextType = LocalizationContext
 componentDidMount=async()=>{
    let a =await AsyncStorage.getItem('APP_LANGUAGE');
    console.log("aaa",a);
    console.log(">>",this.context.translations.WELCOME)
 }
    render(){
        const translations =this.context.translations;
        console.log(">>",translations.WELCOME)
    return(
        <View>
            <Text>{translations.WELCOME}</Text>
            <Button title="change Lang" onPress={()=>this.props.navigation.navigate('LanguageSelectionScreen')} />
        </View>
    )
}
}
export default Login;