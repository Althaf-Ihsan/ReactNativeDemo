import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,ImageBackground} from 'react-native';
export default class Page3 extends React.Component
{
  goToNextScreen=()=>{
    this.props.navigation.navigate('HomeScreen')
  }
  
render()
{
  return(
  <View>
<ImageBackground source={require("../one-piece-joy-boy-wallpaper-1920x1080_48.jpg")} style={styles.img}>
  <TouchableOpacity style={styles.txt} onPress={
    ()=>{
      this.goToNextScreen()
      console.log("pressed")
    }
  }>
<Text>
page3
</Text>
  </TouchableOpacity>
  </ImageBackground>
  </View>
)
}
}
const styles=StyleSheet.create({
txt:{
backgroundColor:'#ddded7',
width:"50%",
alignSelf:"center",
height:60,
alignItems:'center',
justifyContent:"center",
marginTop:430,
borderRadius:20
},

})