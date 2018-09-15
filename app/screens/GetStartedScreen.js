import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  AsyncStorage,
  ToastAndroid,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { BackHandler } from 'react-native';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
const IMEI = require('react-native-imei');

export default class GetStartedScreen extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      otl:null,
      latitude:null,
      longitude:null,
      onprocess:false,
    };

  }
    componentWillMount() {
      AsyncStorage.getItem('otl', (err, result) => {
            this.setState({otl:result})
        })

  BackHandler.addEventListener('hardwareBackPress', () => { //(optional) you can use it if you need it
   LocationServicesDialogBox.forceCloseDialog();
  });

    }
    getStarted(){
      let that = this;
      if (that.state.otl ==="true") {
        // AsyncStorage.removeItem("otl").then((error)=>{
        // })
        that.props.navigation.navigate('SecondScreen')
      }else {
        LocationServicesDialogBox.checkLocationServicesIsEnabled({
        message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
        ok: "YES",
        cancel: "NO",
        enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
        showDialog: true, // false => Opens the Location access page directly
        openLocationServices: true, // false => Directly catch method is called if location services are turned off
        preventOutSideTouch: false, //true => To prevent the location services window from closing when it is clicked outside
        preventBackClick: false //true => To prevent the location services popup from closing when it is clicked back button
          }).then(function(success) {
              if (success.status === "enabled") {
                navigator.geolocation.getCurrentPosition(
                   (position) => {
                        const Imei = IMEI.getImei()
                        that.setState({onprocess:true})
                        fetch(`http://bihan.in/BihanAdmin/api/add_location?imei_no=${Imei}&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`)
                         .then((response) => response.json())
                         .then((responseJson) => {
                           if (responseJson.status === "success" ) {
                             that.setState({onprocess:false})
                             AsyncStorage.setItem('otl',"true").then((err)=>{
                              if (err == null ) {
                                that.setState({otl:"true"})
                              }
                             })
                             ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
                             that.props.navigation.navigate('SecondScreen')
                           }
                           if (responseJson.status === "unsuccess" ) {
                             that.setState({onprocess:false})
                             ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
                           }
                         })
                         .catch((error) => {
                           that.setState({onprocess:false})
                           ToastAndroid.show("कृपया फिर से कोशिश करें", ToastAndroid.SHORT);
                         });

                   },
                   (error) =>{
                    that.getStarted();
                      that.setState({onprocess:false})
                   })
              }
          }).catch((error) => {
              if(error.message === "disabled"){
                ToastAndroid.show('you need to on your location', ToastAndroid.SHORT);
                that.getStarted()
              }
          });
      }
    }


  render() {
    return (
      <View style={styles.container}>
      <Swiper style={styles.wrapper} showsPagination={true} autoplay={true}>
        <View style={styles.slide1}>
        <Text style={{fontSize:22,color:'#03A9F4',position:'absolute',top:20}}>छत्तीसगढ़ राज्य ग्रामीण आजीविका मिशन</Text>
        <Text style={{fontSize:22,color:'#03A9F4',position:'absolute',top:50}}>‘‘बिहान’’</Text>
        <Image source={require('../images/slider1.png')}  style={{flex:1}}/>
        </View>
        <View style={styles.slide2}>
        <Text style={{fontSize:22,color:'#03A9F4',position:'absolute',top:20}}>खुशियाँ बिखेरता बिहान</Text>
        <Image source={require('../images/slider2.png')}  style={{flex:1}}/>
        </View>
        <View style={styles.slide3}>
        <Text style={{fontSize:22,color:'#03A9F4',position:'absolute',top:20}}>आगे बढ़ता छत्तीसगढ़ </Text>
        <Image source={require('../images/slider3.png')}  style={{flex:1}}/>
        </View>
      </Swiper>

      <View style={styles.buttonview}>
      { this.state.onprocess ?  <ActivityIndicator size="large" color="#0000ff" />
      :
        <TouchableOpacity style={styles.bookbutton}
          onPress={this.getStarted.bind(this)} >
               <Text style={styles.text1}>शुरुआत करें</Text>
         </TouchableOpacity>
      }
      </View>

       </View>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
let width = DEVICE_WIDTH - DEVICE_WIDTH/1.8

var styles = StyleSheet.create({
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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  buttonview:{
    margin:5,
    zIndex:100,
  },
  bookbutton: {
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#03A9F4',
      height: 60,
      zIndex: 100,
      borderRadius:20,
    },
    text1:{
      color:'#ffffff',
      fontSize:20,
    },
})
