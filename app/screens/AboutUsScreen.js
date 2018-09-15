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
  Linking,
  WebView,
  Dimensions,
} from 'react-native';
import ProductScreen from './ProductScreen';
import Complaint from './Complaint';
import Adhikari from './Adhikari';
import AddProduct from './AddProduct';
import Vibhag from './Vibhag';
import SuccessStory from './SuccessStory';
import SHG from './SHG';
import Samachar from './Samachar';
import data from './data';

export default class AboutUsScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      animating:true,
    } ;
  }
  openUrl(url){
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  render() {
    const DEVICE_HEIGHT = Dimensions.get('window').height;
      let index = this.props.navigation.state.params.id
      let mydata = data;
      if (index == 1) {
        return (
          <SHG  navigation={this.props.navigation} data={mydata[index].data} title={mydata[index].title}/>
        )
      }
      if (index == 2) {
        return (
          <SHG  navigation={this.props.navigation} data={mydata[index].data} title={mydata[index].title}/>
        )
      }
      if (index == 3) {
        return (
          <SHG  navigation={this.props.navigation} data={mydata[index].data} title={mydata[index].title}/>
        )
      }
      if (index == 4) {
        return (
          <SuccessStory  navigation={this.props.navigation}/>
        )
      }
      if (index == 5) {
        return (
          <ProductScreen  navigation={this.props.navigation}/>
        )
      }
       if (index == 6) {
        return (
          <AddProduct navigation={this.props.navigation}/>
        )
      }
      if (index == 7) {
       return (
         <Vibhag navigation={this.props.navigation}/>
       )
     }
     if (index == 8) {
       return (
         <Adhikari navigation={this.props.navigation}/>
       )
     }
     if (index == 9) {
        return (
          <Complaint navigation={this.props.navigation}/>
        )
      }
      else if (index == 11) {
        return (
          <Samachar navigation={this.props.navigation}/>
        )
      }
      else {
        return (
          <View style={styles.container}>
          <ScrollView style={{backgroundColor:'#ffffff'}}>
              <View style={{height:200,zIndex:0,backgroundColor:'#03A9F4',marginTop:0}}>
              <Image source={index == 10 ? require("../images/cglogo.png") : require('../images/benner.jpg')} style={{flex:1,width: undefined,height: undefined,marginTop:0}}  resizeMode="contain"/>
              </View>

              <View style={{height:80,alignSelf:'stretch',backgroundColor:'#000000',flexDirection:"row",justifyContent:'center',alignItems:'center',zIndex:-2}}>
                <Text style={{color:'#ffffff',fontFamily: 'sans-serif-light',fontSize:18}}>{mydata[index].title}</Text>
              </View>

              <View  style={{flex:1,zIndex:2,flexWrap:'wrap',flexDirection:'row',backgroundColor:'#ffffff',padding:10}}>

              {
                mydata[index].data.map((dat,i)=>{
                  return(
                    <View key={i}>
                      <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}>{dat.title}</Text>
                      {
                        dat.data.map((d,j)=>{
                          if (d === '') {
                            return null ;
                          }else {
                            return (
                              <Text style={{fontSize:16,textAlign:'left'}}  key={j}>   {d}</Text>
                            )
                          }
                        })
                      }
                    </View>
                  )
                })
              }

              </View>


              {
                  index == 10 ?
                <View style={{flexDirection:'column',alignItems:'center',width:'100%',padding:5,backgroundColor:'transparent'}}>
                <TouchableOpacity style={styles.bookbutton4}
                  onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:8})}} >
                        <Text style={{color:'#ffffff'}}>स्टेट / जिला / ब्लॉक स्तर अधिकारी संपर्क सूची </Text>
                 </TouchableOpacity>
                <TouchableOpacity style={styles.bookbutton4}
                    onPress={()=>{this.props.navigation.navigate('ZPS',{link:'https://s3.ap-south-1.amazonaws.com/bihan/content.html'})}} >
                  <Text style={{color:'#ffffff'}}>जिला पंचायत संपर्क सूची </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.bookbutton4}
                  onPress={()=>{this.props.navigation.navigate('ZPS',{link:'https://s3.ap-south-1.amazonaws.com/bihan/srp.html'})}}  >
                   <Text style={{color:'#ffffff'}}>ट्रेनर सूची </Text>
                  </TouchableOpacity>

                </View>
                :
                null
              }

              {
                index == 10 ?
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',padding:5,backgroundColor:'transparent'}}>
                <TouchableOpacity style={styles.bookbutton2}
                  onPress={this.openUrl.bind(this,'https://www.facebook.com/bihan.cgsrlm')} >
                       <Image style={{width:'100%',height:'100%'}} source={require("../images/facebook.png")} />
                 </TouchableOpacity>
                <TouchableOpacity style={styles.bookbutton3}
                  onPress={this.openUrl.bind(this,'https://twitter.com/cgsrlm')} >
                  <Image style={{width:'100%',height:'100%'}} source={require("../images/twitter.png")} />
                 </TouchableOpacity>
                </View>

                :
                <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',padding:5,backgroundColor:'transparent'}}>
                <TouchableOpacity style={styles.bookbutton}
                  onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:mydata[index].previous.id})}} >
                       <Text style={{color:'#ffffff'}}>{mydata[index].previous.title}</Text>
                 </TouchableOpacity>
                <TouchableOpacity style={styles.bookbutton1}
                  onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:mydata[index].next.id})}} >
                       <Text style={styles.text}>{mydata[index].next.title}</Text>
                 </TouchableOpacity>
                </View>

              }


              </ScrollView>

          </View>
        );
      }
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
let width = DEVICE_WIDTH - DEVICE_WIDTH/1.8

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookbutton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#03A9F4',
      height: 40,
      width:120,
      borderRadius: 10,
      zIndex: 100,
      margin:5,
    },
  bookbutton4: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#03A9F4',
      height: 40,
      width:'100%',
      borderRadius: 10,
      zIndex: 100,
      margin:5,
    },
  bookbutton1: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#03A9F4',
      height: 40,
      width:120,
      borderRadius: 10,
      zIndex: 100,
      margin:5,
    },
  bookbutton2: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      marginBottom:10,
      width:120,
      borderRadius: 10,
      zIndex: 100,
      margin:5,
    },
  bookbutton3: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      marginBottom:10,
      width:120,
      borderRadius: 10,
      zIndex: 100,
      margin:5,
    },
    buttonview:{
      margin:5,
      zIndex:100,
    },
    text:{
      color:'#ffffff'
    }
});
