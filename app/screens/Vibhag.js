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

class Vibhag extends Component {

  render() {
    let detail =[
    {name:`डॉ. रमन सिंह `,post:`माननीय मुख्यमंत्री`, d:`छत्तीसगढ़ शासन`,image:`http://res.cloudinary.com/dcr2pfgxy/image/upload/v1518280171/1_ggfrgi.png`},
    {name:`श्री अजय चन्द्राकर   `,post:`माननीय मंत्री`,d:`पंचायत एवं ग्रामीण विकास विभाग,                 छत्तीसगढ़ शासन`,image:`http://res.cloudinary.com/dcr2pfgxy/image/upload/v1518282095/10366236_692726300781113_6504134827672986831_n_ynoffw.jpg`},
    {name:`श्री आर.पी. मंडल`,post:`अपर मुख्य सचिव`,d:`पंचायत एवं ग्रामीण विकास विभाग,              छत्तीसगढ़ शासन`,image:`http://res.cloudinary.com/dcr2pfgxy/image/upload/v1518280229/22_f4blxa.jpg`},
    {name:`श्री पी. सी. मिश्रा `,post:`सचिव`,d:`पंचायत एवं ग्रामीण विकास विभाग,                छत्तीसगढ़ शासन`,image:`http://res.cloudinary.com/dcr2pfgxy/image/upload/v1518280230/pc_mishra_gejeez.jpg`},
    {name:`श्री दीपक सोनी `,post:`मिशन संचालक `,d:`छत्तीसगढ़ राज्य ग्रामीण आजीविका मिशन ‘‘बिहान’’,                     पंचायत एवं ग्रामीण विकास विभाग, छत्तीसगढ़ शासन`,image:`http://res.cloudinary.com/dcr2pfgxy/image/upload/v1518280229/MkNu59KN_400x400_a2s71g.jpg`},
    ]

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>

        <View style={{height:80,alignSelf:'stretch',backgroundColor:'#000000',flexDirection:"row",justifyContent:'center',alignItems:'center',zIndex:-2}}>
        <Image source={require("../images/cglogo.png")} style={{width:50,height:50}}/>
          <Text style={{color:'#ffffff',fontFamily: 'sans-serif-light',fontSize:18}}>छत्तीसगढ़ राज्य ग्रामीण आजीविका मिशन ‘‘बिहान’’</Text>
        </View>


        {
          detail.map((list,i)=>{
            return(
              <View style={styles.card} key={i}>
                <View style={{flex:1,flexDirection:'row'}} >
                  <View style={{  flex:2,borderRadius:50,justifyContent:'center',alignItems:'center'}}><Image source={{uri:list.image}}  style={{alignSelf:'stretch',width:150,height:150,borderRadius:80}} /></View>
                    <View style={{flex:2,}}>

                      <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View>
                          <Text style={{ fontFamily: 'sans-serif-light', fontWeight: 'bold',fontSize:16,marginTop:5,color:'black'}}>{list.name} </Text>
                        </View>
                      </View>

                      <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View>
                          <Text style={{ fontFamily: 'sans-serif-light',fontSize:14,marginTop:5,color:'black'}}>{list.post}</Text>
                        </View>
                      </View>

                      <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View>
                          <Text style={{ fontFamily: 'sans-serif-light',fontSize:14,marginTop:5,color:'black'}}>{list.d}</Text>
                        </View>
                      </View>

                    </View>
                </View>
              </View>
            )
          })
        }

        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',padding:5,backgroundColor:'transparent'}}>
        <TouchableOpacity style={styles.bookbutton2}
          onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:10})}} >
               <Text style={{color:'#ffffff'}}>संपर्क करे</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.bookbutton3}
          onPress={()=>{this.props.navigation.navigate('AboutUsScreen',{id:8})}} >
               <Text style={styles.text1}>अधिकारी सूची</Text>
         </TouchableOpacity>
        </View>

        </ScrollView>
      </View>
    );
  }

}

export default Vibhag;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width : DEVICE_WIDTH - 80,
    height:200
  },
  scrollview:{
    width:'100%',
    borderWidth:1,
  },
  card:{
  flex:1,
  flexDirection:'row',
  margin:2,
  padding:5,
  shadowOpacity: 0.2,
   shadowRadius: 5,
   shadowColor: 'blue',
   shadowOffset: { height: 20, width: 20 },
   zIndex:100,
   backgroundColor:'#efefef',
   borderBottomWidth:1,
   borderBottomColor:'#cfcfcf'
},
bookbutton: {
    position:'absolute',
    bottom:0,
    right:2,
    alignSelf:'center',
    borderRadius: 5,
    zIndex: 100,
    margin:5,
    padding:10,
    borderWidth:1,
    borderColor:'#F44336'
  },
  bookbutton2: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#03A9F4',
      height: 40,
      width:120,
      borderRadius: 10,
      zIndex: 100,
      margin:5,
    },
  bookbutton3: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#03A9F4',
      height: 40,
      width:120,
      borderRadius: 10,
      zIndex: 100,
      margin:5,
    },

  text:{
    fontSize:10,
    color:'#F44336',
  },
  text1:{
    color:'#ffffff'
  }
})
