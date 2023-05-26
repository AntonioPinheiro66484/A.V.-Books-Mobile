import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import TelaD from '../views/TelaD'

const Tab = createBottomTabNavigator()

export default comp =>(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused, color, size})=>{
        let iconName;
      switch(route.name){
        case 'TelaA':
          iconName = focused
          ?'ios-information-circle'
          :'ios-information-circle-outline'
          break;
        case 'TelaB':
          iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline'
          break;
        case 'TelaC':
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline'
          break;
        case 'TelaD':
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline'
          break;
      }
      return <Ionicons
        name={iconName}
        size={size}
        color={color}/>;
      }
    })}
    tabBarOptions={{
        activeTintColor :'green',
        inactiveTintColor:'blue',
        labelStyle:{ fontSize: 30}   
    }} initialRouteName="TelaB">

    <Tab.Screen name="TelaA" component={TelaA}/>    
    <Tab.Screen name="TelaB" component={TelaB}/>    
    <Tab.Screen name="TelaC" component={TelaC}/>    
    <Tab.Screen name="TelaD" component={TelaD}/>    
  </Tab.Navigator>
)



