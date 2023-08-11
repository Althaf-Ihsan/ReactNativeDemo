import React from 'react'
import {TouchableOpacity,View,Text,StyleSheet,ImageBackground} from 'react-native'
 export default class Next extends React.Component
{
  goTohomeScreen=()=>{
    this.props.navigation.navigate('HomeScreen')
  }
  render()
  {
return(
  <View>
  <TouchableOpacity style={styles.txt} onPress={
    ()=>{
      this.goTohomeScreen();
      console.log("pressed")
    }
  }>
  <Text>go to home</Text>
  </TouchableOpacity>
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