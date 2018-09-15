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
export default class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }

  componentDidMount() {
    fetch('http://bihan.in/BihanAdmin/api/storyvideo')
   .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data:responseJson})
    })
    .catch((error) => {
      ToastAndroid.show('नेटवर्क उपलब्ध नहीं है', ToastAndroid.SHORT);
    });
  }
  trunc(text) {
    return text.length > 35 ? `${text.substr(0, 35)}...` : text;
  }

  render() {
    let detail =[
      {videoid:"2Tx2YcCFcZk",title:"महिला सशक्तिकरण सरगुजा"},
      {videoid:"3Metw_-_11A",title:"पुरानी लघु कथा बिहान पे"},
      {videoid:"4ih61SDHypA",title:"विशेष कार्यक्रम एनआरएलएम (NRLM) पे (डी डी न्यूज़ )"},
      {videoid:"ouh7sI6qb1Q",title:"बैंक सखी संकल्पना एनआरएलएम में (ज़ी टीवी कवरेज )"},
      {videoid:"tGkYEnz6qYw",title:"उम्मीदें और चुनौतियाँ - एनआरएलएम (NRLM) मिशन (देश दर्शन)"},
      {videoid:"A9pEp35LWN8",title:"ग्रामीण आजीविका मिशन पे विवरण (इकॉनमी टुडे )"},
      {videoid:"jWGeqLRBTQs",title:"बिहान स्वयं सहायता समूह (SHG) गीत"},
      {videoid:"LM6b4ap43Ec",title:"जोहार बस्तर - एसएचजी ग्रामीण विकास के लिए"},
      {videoid:"gdZeYT7B1Oc",title:"बिहान हमर द्वार"},
      {videoid:"-LkYZ_L0fQE",title:"लघु कथा - मंगतिनबाई, बोइरगांव,छत्तीसगढ़"},
    ]
    if (this.state.data.length == 0) {
      return(
        <View style={styles.indicaorcontainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }else {
      let myvideo = this.state.data.filter((video)=>{
          if (video.svideourl !== null) {
            return video;
          }
      })
    return (
      <View style={styles.container}>
      <ScrollView>

      <View style={{ height: 250 }}>

          <WebView
                  style={ styles.WebViewContainer }
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: `https://www.youtube.com/embed/2Tx2YcCFcZk` }}
          />

      </View>

      <View style={{height:30,alignSelf:'stretch',backgroundColor:'#000000',flexDirection:"row",justifyContent:'center',alignItems:'center',zIndex:-2}}>
        <Text style={{color:'#ffffff',fontFamily: 'sans-serif-light',fontSize:18}}>सफलता की कहानियाँ </Text>
      </View>



      {
        myvideo.map((list,i)=>{
          return(
            <TouchableOpacity key={i} style={styles.list} onPress={()=>{
              if (list.svideourl == null) {
                ToastAndroid.show('Not Valid Link', ToastAndroid.SHORT);
                return
              }
              this.props.navigation.navigate('SuccessStoryScreen',{yid:list.svideourl,title:list.stitle})
            }}>
            <Text style={{marginLeft:5,fontSize:18,color:'#000000'}}>{this.trunc(list.stitle)}</Text>
            <Text style={{marginRight:20,fontSize:20}}>></Text>
            </TouchableOpacity>
          )
        })
      }
      </ScrollView>
      </View>
    );
   }
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#dfdfdf'
  },
  indicaorcontainer:{
   flex: 1,
   backgroundColor: '#F5FCFF',
   alignItems:'center',
   justifyContent:'center'
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
})
