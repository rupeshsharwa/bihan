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
import Swiper from 'react-native-swiper';


export default class SecondScreen extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>

          <View style={{height:200}}>
          <Swiper style={styles.wrapper} showsPagination={true} autoplay={true}>
            <View style={styles.slide1}>
            <Image source={require('../images/mybanner.jpg')}  style={{flex:1}}/>
            </View>
            <View style={styles.slide2}>
            <Image source={require('../images/banner.jpg')}  style={{flex:1}}/>
            </View>
            <View style={styles.slide3}>
            <Image source={require('../images/banner2.jpg')}  style={{flex:1}}/>
            </View>
          </Swiper>
          </View>

          <View style={{height:35,alignSelf:'stretch',backgroundColor:'#000000',flexDirection:"row",justifyContent:'center',alignItems:'center',zIndex:-2}}>
            <Text style={{color:'#ffffff',fontFamily: 'sans-serif-light',fontSize:18}}>छत्तीसगढ़ राज्य ग्रामीण आजीविका मिशन </Text>
          </View>


          <View style={{flex:2,zIndex:2,flexWrap:'wrap',justifyContent:'center',flexDirection:'row',backgroundColor:'#ffffff'}}>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:0})}} style={styles.card}>
            <Image source={require('../images/bihanlogo.png')}  style={{width:70,height:70,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>बिहान एक परिचय </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:1})}} style={styles.card1}>
            <Image source={require('../images/shg.png')}  style={{width:70,height:70,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>सामुदायिक संस्थाएँ</Text>
              </View>
            </TouchableOpacity>



            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:2})}} style={styles.card2}>
            <Image source={require('../images/livlihood.png')}  style={{width:70,height:70,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>आजीविका  गतिविधियाँ </Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:3})}} style={styles.card3}>
            <Image source={require('../images/sakhanye.png')}  style={{width:70,height:70,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>बिहान-घटक</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:4})}} style={styles.card4}>
            <Image source={require('../images/video.png')}  style={{width:70,height:70,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>सफलता की कहानियाँ </Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:5})}} style={styles.card5}>
            <Image source={require('../images/product.png')}  style={{width:70,height:70,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>जिलेवार उत्पादों की सूची</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:6})}} style={styles.card6}>
            <Image source={require('../images/upload.png')}  style={{width:50,height:50,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>उत्पाद अपलोड करे</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:7})}} style={styles.card7}>
            <Image source={require('../images/vises.png')}  style={{width:70,height:70,marginBottom:20}}/>
            <View style={styles.subcard}>
            <Text style={{fontFamily: 'sans-serif-light',padding:3}}>नेतृत्व टीम </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:8})}} style={styles.card8}>
            <Image source={require('../images/zila.png')}  style={{width:70,height:70,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',fontSize:12}}>अधिकारी सूची</Text>
              </View>
            </TouchableOpacity>



            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:9})}} style={styles.card9}>
            <Image source={require('../images/sampark.png')}  style={{width:70,height:70,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>सुझाव / शिकायत</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:10})}} style={styles.card10}>
            <Image source={require('../images/call.png')}  style={{width:70,height:70,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>सम्पर्क/हेल्पलाइन नम्बर</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:11})}} style={styles.card11}>
            <Image source={require('../images/samachar.png')}  style={{width:50,height:50,marginBottom:20}}/>
              <View style={styles.subcard}>
                <Text style={{fontFamily: 'sans-serif-light',padding:3}}>समाचार</Text>
              </View>
            </TouchableOpacity>


            </View>

            </ScrollView>

      </View>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
let width = DEVICE_WIDTH - DEVICE_WIDTH/1.8

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor:'#ffffff'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  slide4:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  bookbutton: {
  		alignItems: 'center',
  		justifyContent: 'center',
  		backgroundColor: '#3b5998',
  		height: 40,
      width: DEVICE_WIDTH - 120,
  		borderRadius: 20,
  		zIndex: 100,
      margin:5,
  	},
    text:{
      color:'#ffffff',
      fontSize:20,
    },
    card:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#0277BD',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
        shadowOpacity: 0.2,
         shadowRadius: 5,
         shadowColor: 'blue',
         shadowOffset: { height: 20, width: 20 },
         zIndex:100,
       },
    card1:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FF9800',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card2:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#9C27B0',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card3:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#E91E63',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card4:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#FFC400',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card5:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#3F51B5',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card6:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#4CAF50',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card7:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#CDDC39',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card8:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#795548',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card9:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#607D8B',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card10:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#1E88E5',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
    card11:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#827717',
      width:width,
      height:150,
      margin:5,
      borderRadius:5,
      borderWidth:0.5,
      shadowOpacity: 0.2,
       shadowRadius: 5,
       shadowColor: 'blue',
       shadowOffset: { height: 20, width: 20 },
       zIndex:100,
       },
  subcard:{
    position:'absolute',
    bottom:0,
    alignSelf:'center',
    height:40,
    width:'100%',
    backgroundColor:'#ffffff',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    flex:1,
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
}

});
