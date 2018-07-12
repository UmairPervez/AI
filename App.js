import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ParentLogin from './src/components/login/parentLogin';
import TeacherLogin from './src/components/login/teacherLogin';
import Iconscreen from './src/components/login/iconscreen';
import Ptm from './src/components/login/ptm';
import DiaryPage from './src/components/login/diary';
import Attendences from './src/components/login/attendence';
import TeacherSign from './src/components/login/teachersignup';
import ParentSign from './src/components/login/parentSignup';




class App extends React.Component {
render() {
    return (
      <View style={styles.container}>
        <Text  style={styles.text1} >Smart Schooling System</Text>
        <View  style={styles.logocontainer} >
          <Image 
             style ={styles.logo}
            source={require('./src/images/smart.png')}> 
          </Image>
          <Text style={styles.parent1}>Login...!</Text>
          <View style={styles.inputcontainer}>
          <TouchableOpacity style={styles.buttoncontainer}>
            <Text style={styles.buttonlogin}  
            onPress={() => this.props.navigation.navigate('Parent')}>Parent Login..</Text>
            </TouchableOpacity>
    <TouchableOpacity style={styles.buttoncontainer} >
            <Text style={styles.buttonlogin}
            onPress={() => this.props.navigation.navigate('Teacher')}
            >Teacher Login..</Text>
            </TouchableOpacity>


          </View>

       </View>

      </View>
    );
  }
}

export default StackNavigator({
  Main: {
    screen: App,
  },
  Parent: {
    screen: ParentLogin,
  },
  Teacher: {
    screen: TeacherLogin,
  },
  IconScreen: {
    screen: Iconscreen,
  },
  PTMM:{

    screen: Ptm,
  },
  DiaryPress:{

    screen : DiaryPage,
  },
  Attend: {
    screen : Attendences,
  },
  TS:{
    screen:TeacherSign,
  },
  PS:{
    screen:ParentSign,


  }

  
  
}, {
  initialRouteName: 'Main',
});

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#2980B9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding : 30,

  },
  text1:{
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    fontStyle:'italic',
    textShadowColor:'#252525',
    textShadowOffset:{width:1,height:1},
    textShadowRadius:15,
    marginBottom:20,
    
  },
  logocontainer:{
    
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  logo:{
    
  width:250,
  height:250
  },
  parent1:{
    fontSize:20,    
 color: 'white',
 marginTop:10,
 textAlign:'center',
 width:160,
 opacity:1,
 fontStyle:'italic',
 fontWeight:'bold'
  },
  inputcontainer:{
    width:320,
 margin:20,
 marginBottom:0,
 padding:20,
 paddingBottom:10,
 borderWidth:1,
 borderColor:'#fff',
 backgroundColor:'rgba(255,255,255,0.2)',
 alignSelf:'stretch'
  },
  buttoncontainer:{
width:260,
margin:10,
padding:5,
borderWidth:1.5,
backgroundColor:'blue',
borderColor:'#fff',
backgroundColor:'rgba(255,255,255,0.2)',
alignSelf:'stretch'
  },
  buttonlogin:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16,
    fontStyle:'italic',
    color:'white',
    height:40,
    padding:10,
    marginBottom:10,
    width:250,
    
  },
  
 
});
