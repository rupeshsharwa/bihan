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
  Dimensions,
} from 'react-native';


class ProductDetail extends Component {

  render() {
    let detail =[
      {videoid:"2Tx2YcCFcZk",title:"महिला सशक्तिकरण सरगुजा"},
      {videoid:"3Metw_-_11A",title:"पुरानी लघु कथा बिहान पे"},
      {videoid:"4ih61SDHypA",title:"विशेष कार्यक्रम एनआरएलएम (NRLM) पे (डी डी न्यूज़ )"},
      {videoid:"ouh7sI6qb1Q",title:"बैंक सखी संकल्पना एनआरएलएम में (ज़ी टीवी कवरेज )"},
      {videoid:"tGkYEnz6qYw",title:"उम्मीदें और चुनौतियाँ - एनआरएलएम (NRLM) मिशन (देश दर्शन)"},
      {videoid:"A9pEp35LWN8",title:"ग्रामीण आजीविका मिशन पे विवरण (इकॉनमी टुडे )"},
    ]

    const date = new Date(this.props.navigation.state.params.detail.updated_at)
    console.log(date);

    return (
      <ScrollView>
      <View style={styles.container}>
               <Image source={{uri:this.props.navigation.state.params.detail.utpad_image}} style={{alignSelf:'stretch',height:220,borderWidth:1,marginTop:10}}/>
               <View style={{flexDirection:'row',alignItems:'center'}}>
                <View>
                  <Text  style={{ fontFamily: 'sans-serif-light', fontWeight: 'bold',fontSize:20,marginTop:5,color:'black',paddingLeft:2}}> { this.props.navigation.state.params.detail.utpad_naam}  </Text>
               </View>
               </View>

               <View style={{flexDirection:'row',alignItems:'center'}}>
               <Text style={{ fontFamily: 'sans-serif-light',fontSize:16,marginTop:5,color:'black',paddingLeft:2}}> { this.props.navigation.state.params.detail.district} </Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
               <Text style={{ fontFamily: 'sans-serif-light',fontSize:16,marginTop:5,color:'black',paddingLeft:2}}> { this.props.navigation.state.params.detail.description} </Text>
               </View>
               <View style={{flexDirection:'row',alignItems:'center'}}>
               <Text style={{ fontFamily: 'sans-serif-light',fontSize:16,marginTop:5,color:'black',paddingLeft:2}}> { this.props.navigation.state.params.detail.utpadanshreni} </Text>
               </View>

               <View style={{flexDirection:'row',alignItems:'center'}}>
               <Text style={{ fontFamily: 'sans-serif-light',fontSize:16,marginTop:5,color:'black',paddingLeft:2}}> {`${date.getDate()}/${date  .getMonth()+1}/${date .getFullYear()}`} </Text>
               </View>
               </View>
               </ScrollView>
             );
  }

}

export default ProductDetail;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems:'center',
  },
  indicaorcontainer:{
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems:'center',
    justifyContent:'center'
  },
  bookbutton: {
  		alignItems: 'center',
  		justifyContent: 'center',
  		backgroundColor: '#F44336',
      width: DEVICE_WIDTH - 60,
  		borderRadius: 5,
  		zIndex: 100,
      margin:5,
      padding:10
  	},
    text:{
      color:'#ffffff',
    },
});
