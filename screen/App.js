import React from 'react';
import HomeScreen from './screen/home';
import Next from './screen/next';
import Page3 from './screen/page3';
import Page4 from './screen/page4';
import Page5 from './screen/page5';
import {View} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

// const Stack = createNativeStackNavigator();
export default function App(){
  return(
 <View>
<AppContainer/>
 </View>
  )
}
var AppNavigator=createSwitchNavigator(
  {
    HomeScreen:HomeScreen,
    Next:Next,
    Page3:Page3,
    Page4:Page4,
    Page5:Page5
  }
)
const AppContainer=createAppContainer(AppNavigator);