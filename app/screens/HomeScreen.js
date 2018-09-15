import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';


export default class HomeScreen extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
          <View style={{flex:1}}>
          </View>
          <View style={{flex:2}}>
          <Image source={require('../images/yt.jpg')} style={{flex:1,justifyContent: 'center',
    alignItems: 'center',}}/>
          </View>

          <View style={{marginTop:10,position:'absolute',bottom:15,alignSelf:'center',}}>
          { this.props.todosReady ? null :
          <TouchableOpacity style={styles.bookbutton}
            onPress={()=>{this.props.navigation.navigate('SecondScreen')}} >
                 <Text style={styles.text}>शुरुआत करें</Text>
           </TouchableOpacity>
          }
          </View>

      </View>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookbutton: {
  		alignItems: 'center',
  		justifyContent: 'center',
  		backgroundColor: '#03A9F4',
  		height: 50,
      width: DEVICE_WIDTH - 120,
  		borderRadius: 10,
  		zIndex: 100,
      margin:5,
  	},
    text:{
      color:'#ffffff',
      fontSize:20,
    },

});
