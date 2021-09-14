import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/AntDesign';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const BottomTab =()=>{
    return(
        <View style={{justifyContent:'flex-end',marginTop:hp('4%'),flexDirection:'column'}}>
            <View style={styles.InPut}>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
                <View style={{height:hp('10%'),width:wp('31%')}}>
                    <TouchableOpacity style={{alignSelf:'center'}}>
                  <Icon style={{marginTop:hp('1%')}} name="database" color="#49A6FC" size={hp('4%')} />
                    </TouchableOpacity>
                </View>

                <View style={{height:hp('15%'),width:wp('31%'),marginTop:hp('-4.5%')}}>
                <TouchableOpacity style={{alignSelf:'center',marginBottom:hp('5%'),alignContent:'flex-start',flexDirection:'column'}}>
                  <Icon1 style={{marginTop:hp('1%')}} name="pluscircle" color="#49A6FC" size={hp('7%')} />
                    </TouchableOpacity>
                </View>

                <View style={{height:hp('10%'),width:wp('31%')}}>
                <TouchableOpacity style={{alignSelf:'center'}}>
                  <Icon1 style={{marginTop:hp('1%')}} name="setting" color="#49A6FC" size={hp('5%')} />
                    </TouchableOpacity>
                </View>
                
            </View>
            </View>
           
        </View>
    )
};

const styles =StyleSheet.create({
    InPut:{
    backgroundColor:'#E5E5E5',
    width:wp('100%'),
    height:hp('8.6%')
    }
})

export default BottomTab;