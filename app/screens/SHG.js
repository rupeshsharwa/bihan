import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
  WebView,
  Dimensions,
} from 'react-native';
import ListView from '../components/ListView';
class SuccessStory extends Component {

  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={{backgroundColor:'#ffffff'}}>
          <View style={{height:200,zIndex:0,backgroundColor:'#ffffff',marginTop:0}}>
          <Image source={require('../images/mybanner.jpg')} style={{flex:1,width: undefined,height: undefined,marginTop:0}}  resizeMode="contain"/>
          </View>

          <View style={{height:80,alignSelf:'stretch',backgroundColor:'#000000',flexDirection:"row",justifyContent:'center',alignItems:'center',zIndex:-2}}>
            <Text style={{color:'#ffffff',fontFamily: 'sans-serif-light',fontSize:18}}>{this.props.title}</Text>
          </View>

          {
            this.props.data.map((data,i)=>{
              return   <ListView key={i} {...data} />
            })
          }

          </ScrollView>
      </View>
    );
  }

}

export default SuccessStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list:{
    flex:1,
    height:50,
    width:'100%',
    backgroundColor:'#efefef',
    justifyContent:'space-between',
    alignItems:'center',
    margin:2,
    borderColor:'black',
    flexDirection:'row'
  },
  WebViewContainer: {

    marginTop: (Platform.OS == 'ios') ? 20 : 0,

  },
  list:{
    flex:1,
    height:50,
    width:'100%',
    backgroundColor:'#efefef',
    justifyContent:'space-between',
    alignItems:'center',
    margin:2,
    borderColor:'black',
    flexDirection:'row'
  },
})
