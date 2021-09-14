import React, { Component } from 'react';
import {Text,View,StyleSheet,FlatList, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BottomTab from '../../Components/BottomTab';

const SECTIONS = [
   
    {
      key: '1',
      text: 'Item text 1',
      uri: 'https://picsum.photos/id/1020/200',
    },
    {
      key: '2',
      text: 'Item text 2',
      uri: 'https://picsum.photos/id/1024/200',
    },

    {
      key: '3',
      text: 'Item text 3',
      uri: 'https://picsum.photos/id/1027/200',
    },
    {
      key: '4',
      text: 'Item text 4',
      uri: 'https://picsum.photos/id/1035/200',
    },
    {
      key: '5',
      text: 'Item text 5',
      uri: 'https://picsum.photos/id/1038/200',
    },
 
];
export default class DashBoard extends Component{
    
    render(){
        return(
        <SafeAreaView>
            <View style={styles.mainView}>
           <View style={{flexDirection:'column'}}>
             <Text style={styles.Text1}>Good Evening</Text>
             <Text style={styles.Text2}>Welcome back</Text>
           </View>

           <View style={styles.iconView}>
           <Icon name="crown" color="gold" size={hp('5%')} />
           </View>
            </View>

             <View style={styles.card}>
                <Text style={styles.Text3}>Unlock Premium</Text>
                <Text style={styles.Text4}>Create Unlimited HD Scan & Picture to Text Scans without watermarks</Text>
             </View>
            
              
              <View style={styles.TextInput1}>
              <Icon1 name="search1" color="gray" size={hp('3.5%')} style={{alignSelf:'center',marginLeft:wp('1.5%')}} />
            <TextInput style={styles.TextInput} placeholder="Search through your scans"/>
            </View>

            <View style={styles.icons}>
                <View style={{alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                <Icon1 name="filetext1" color="#49A6FC" size={hp('5.2%')} />
                <Text style={{textAlign:'center',fontWeight:'bold'}}>Single Scan</Text>
                </View>
                <View  style={{alignItems:'center'}}>
                <Icon1 name="copy1" color="#49A6FC" size={hp('5.5%')} />
                <Text style={{textAlign:'center',fontWeight:'bold'}}>Batch Scan</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Icon2 name="script-text" color="#49A6FC" size={hp('6%')} />
                <Text style={{textAlign:'center',fontWeight:'bold'}}>Scan to Text</Text>
                </View>
            </View>
            
            <Text style={{fontWeight:'bold',fontSize:hp('3%'),marginLeft:wp('5%'),marginTop:hp('2%')}}>Recent Scans</Text>
       <View style={{height:hp('24%')}}>
       <FlatList
       horizontal
       showsHorizontalScrollIndicator={false}
       ItemSeparatorComponent={
        () => <View style={{ width: 16, backgroundColor: 'white' }}/>
    }
        data={SECTIONS}
        renderItem={({ item }) => (
         <Image style={{borderRadius:13,width:wp('40%'),height:hp('22%')}} source={{uri:item.uri}}/>
           
        )}
      />
       </View> 

       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <Text style={styles.Text5}>
               Folders
           </Text>
           <TouchableOpacity>
           <Icon1 style={{marginRight:wp('5%'),marginTop:hp('1.4%')}} name="addfolder" color="#49A6FC" size={hp('3%')} />
           </TouchableOpacity>
       </View>
       <BottomTab />
  </SafeAreaView>
        );
    }
}

const styles= StyleSheet.create({
    mainView:{
        marginTop:hp('5%'),
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#E5E5E5'
    },
    Text1:{
      fontSize:hp('5%'),
      fontWeight:'bold'
    },
    Text2:{
     color:'#9B9B9B',
     fontSize:hp('2.5%'),
     fontWeight:'bold'
    },
    Text3:{
        fontSize:hp('3%'),
        marginLeft:wp('4%'),
        marginTop:hp('1%'),
        fontWeight:'bold',
        color:'white'
    },
    Text5:{
        fontSize:hp('3%'),
        marginLeft:wp('4%'),
        marginTop:hp('1%'),
        fontWeight:'bold',
        color:'black'
    },
    Text4:{
        fontSize:hp('1.7%'),
        marginLeft:wp('4%'),
        marginTop:hp('1%'),
        fontWeight:'bold',
        color:'white'
    },
    iconView:{
        marginTop:hp('1.5%')
    },
    card:{
        alignSelf:'center',
        width:wp('80%'),
        height:hp('12%'),
        marginTop:hp('2%'),
        borderRadius:15,
        backgroundColor:'blue',
        
    },
    TextInput:{
        marginTop:hp('0%'),
        width:wp('60%'),
        alignSelf:'center',
        borderRadius:18,
        backgroundColor:'white'
        
    },
    TextInput1:{
        marginTop:hp('2.5%'),
        width:wp('80%'),
        alignSelf:'center',
        borderRadius:18,
        backgroundColor:'white',
        flexDirection:'row'
        
    },
    icons:{
        flexDirection:'row',
        marginTop:hp('2.5%'),
        justifyContent:'space-evenly'
    }
})

//export default DashBoard;


  