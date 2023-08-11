import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,ImageBackground} from 'react-native';
 export default class HomeScreen extends React.Component
{
  goToNextScreen=()=>{
    this.props.navigation.navigate('Next')
  }
  
  goToNextScreen1=()=>{
    this.props.navigation.navigate('Page3')
  }
   goToNextScreen2=()=>{
    this.props.navigation.navigate('Page4')
  }
  goToNextScreen3=()=>{
    this.props.navigation.navigate('Page5')
  }
render()
{
  return(
  <View>
<ImageBackground source={require("../one-piece-joy-boy-wallpaper-1920x1080_48.jpg")} style={styles.img}>
<View style={styles.viewButton}>
<TouchableOpacity style={styles.txt} onPress={
    ()=>{
      this.goToNextScreen()
      console.log("pressed")
    }
  }>
<Text>
click here
</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.txt} onPress={
    ()=>{
      this.goToNextScreen1()
      console.log("pressed")
    }
  }>
<Text>
click here
</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.txt} onPress={
    ()=>{
      this.goToNextScreen2()
      console.log("pressed")
    }
  }>
<Text>
click here
</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.txt} onPress={
    ()=>{
      this.goToNextScreen3()
      console.log("pressed")
    }
  }>
<Text>
click here
</Text>
  </TouchableOpacity>
  </View>
  </ImageBackground>
  </View>
)
}
}
const styles=StyleSheet.create({
viewButton:{
  marginTop:400,
display:'flex',
flexDirection:'row',
flexWrap:"wrap",
},
txt:{
backgroundColor:'#ddded7',
width:"50%",
alignSelf:"center",
height:60,
alignItems:'center',
justifyContent:"center",
borderRadius:20
},
img:{
 flex: 1,
 alignSelf: 'stretch',
 width: null
}
})