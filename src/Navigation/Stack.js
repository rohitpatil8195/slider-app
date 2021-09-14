import * as React from 'react';
import { View, Platform, Image } from 'react-native';
import { Home } from '../Screens/Home/Home';
import DashBoard from '../Screens/DashBoard/DashBoard'
import LoginScreen from '../Screens/Login/Login';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 

const Stack = createStackNavigator();


// const Tab = createBottomTabNavigator();

// function TabNav() {
//   return ( 
//     <Tab.Navigator
//       screenOptions={{headerShown: false, tabBarActiveTintColor: '#0067BF'}}
//       initialRouteName="DashBoard">
//     <Tab.Screen
//     name="Home"
//     options={{
//         tabBarLabel: '',
//         tabBarIcon: ({ color }) => (
//             <Icon name="home" color={color} size={26} />
//         )
//     }}
//     component={LoginScreen} />
//     <Tab.Screen
//     name="Workout"
//     options={{
//         tabBarLabel: '',
//         tabBarIcon: ({ color }) => (
//             <Icon name="fitness-center" color={color} size={26} />
//         )
//     }}
//     component={LoginScreen} />
//     <Tab.Screen
//     name="Add"
//     options={{
//         tabBarLabel: '',
//         tabBarIcon: ({ color }) => (
//             <View
//             style={{
//                 position: 'absolute',
//                 bottom: 0, // space from bottombar
//                 height: 68,
//                 width: 68,
//                 borderRadius: 68,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//             }}
//             >
//             <Icon name="add-circle-outline" color="grey" size={68}/>
//             </View>
//         )
//     }}
//     component={LoginScreen}/>
//     <Tab.Screen
//     name="Store"
//     options={{
//         tabBarLabel: '',
//         tabBarIcon: ({ color }) => (
//             <Icon name="store" color={color} size={26} />
//         )
//     }}
//     component={LoginScreen} />
//     <Tab.Screen
//     name="Profile"
//     options={{
//         tabBarLabel: '',
//         tabBarIcon: ({ color }) => (
//             <Icon name="perm-identity" color={color} size={26} />
//         )
//     }}
//     component={LoginScreen} />
//     </Tab.Navigator>
//   );
// }

// function DrawerRoutes() {
//   return (    
//       <Drawer.Navigator
//       edgeWidth={0}
//       drawerContent={props => DrawerComponent(props)}
//         initialRouteName="HomeScreen"
//         drawerContentOptions={{
//           activeTintColor: '#e91e63',
//           itemStyle: { },
//         }}
//         >
//         <Drawer.Screen name='HomeScreen' component={HomeScreen} />
//         <Drawer.Screen name='About' component={About} />
//         <Drawer.Screen name='Contact' component={Contact} />
        
//       </Drawer.Navigator>
//   );
// }

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false
        }}>
             <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="DashBoard" component={DashBoard} />
         <Stack.Screen name="Login" component={LoginScreen} />
       
          </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;