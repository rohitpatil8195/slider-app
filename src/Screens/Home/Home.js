// import React, { Component } from 'react';
// import {Text,View,StyleSheet,Image,SafeAreaView} from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// class Home extends Component{
//         render(){
//                 return(
//                         <SafeAreaView style={{backgroundColor:'white',height:hp('100%')}}>
//                      <View style={styles.ImageView}>
//                              <Image source={require('../../assets/images/tech.png')}/>
//                      </View>
//                      <View style={styles.TextView1}>
//                              <Text style={styles.TextStyle1}>
//                              Scan anything in HD, wherever you are...
//                              </Text>
//                      </View>

//                      <View style={styles.TextView2}>

//                         <Text style={styles.TextStyle2}>
//                              Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. 
//                              </Text> 
//                      </View>
//                         </SafeAreaView>
//                 )
//         }
// }
// const styles =StyleSheet.create({
//         ImageView:{
//                 alignSelf:'center',
//                 marginTop:hp('15%')
//         },
//         TextView1:{
//                 width:wp('70%'),
//                 alignSelf:'center',
//                 marginTop:hp('10%')
//         },
//         TextStyle1:{
//                 fontSize:hp('3%'),
//                 textAlign:'center',
//                 color:'black',
//                 fontWeight:'bold'
//         },
//         TextView2:{
//                 width:wp('82%'),
//                 alignSelf:'center',
//                 marginTop:hp('5%')
                
//         },
//         TextStyle2:{
//                 fontSize:hp('2%'),
//                 textAlign:'center',
//                 color:'black',
//                 fontWeight:'bold'
                
//         }
// })
// export default Home;





import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Home = ({navigation}) => {
       // const navigation = useNavigation();
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    //setShowRealApp(true);
    navigation.navigate('DashBoard')
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const renderButton =()=>{
        return (
                <View style={styles.buttonCircle}>
                  <Icon name="right" color="rgba(255, 255, 255, .9)" size={24} />
                </View>
              );
  }


  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          
        }}>
    
        <Image style={styles.introImageStyle} source={item.image} />
        <View style={styles.TextView1}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        </View>
        <View style={styles.TextView2}>
        <Text style={styles.introTextStyle}>{item.text}</Text>
        </View>
       
       
    
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() =>alert("sdsdsd")}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
        dotStyle={{backgroundColor:'#9B9B9B'}}
        activeDotStyle={{backgroundColor:'#49A6FC'}}
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={false}
          onSkip={onSkip}
          renderDoneButton={renderButton}
         
        />
      )}
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 190,
    height:170,
   marginTop:hp('10%')
  },
  introTextStyle: {
    fontSize: hp('1.8'),
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    color:'black',
    fontWeight:'bold'
   // marginBottom:hp('-28%')
  },
  introTitleStyle: {
        fontSize:hp('2.8%'),
        textAlign:'center',
        color:'black',
        fontWeight:'bold'
  },
          TextView1:{
                  width:wp('70%'),
                  alignSelf:'center',
                  marginTop:hp('10%')
          },
                  TextView2:{
                          width:wp('82%'),
                          alignSelf:'center',
                          marginTop:hp('0%')
                          
                  }
                  ,
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: '#49A6FC',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const slides = [
  {
       
    key: 's1',
    text: ' Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. ',
    title: 'Scan anything in HD, wherever you are...',
    image: 
        require('../../assets/images/tech.png')
    ,
    backgroundColor: 'white',
  },
  {
    key: 's2',
    title: `Navigate work documents? like a Pro`,
    text: 'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly. ',
    image: require('../../assets/images/men.png'),
    backgroundColor: 'white',
  },
  {
    key: 's3',
    title: `Less time scanning homework = more time for fun`,
    text: 'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
    image: require('../../assets/images/Father_son.png'),
    backgroundColor: 'white',
  },
  {
    key: 's4',
    title: 'Covert Pictures to Text with our next generation offline OCR',
    text: ' Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
    image: require('../../assets/images/Hero.png'),
    backgroundColor: 'white',
  }
];



