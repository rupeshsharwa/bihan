import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  WebView,
  Dimensions,
} from 'react-native';


export default class SuccessStoryScreen extends Component<{}> {

  openUrl(url){
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }


  render() {
    let detail =[
      {name:"बिहान बाजार खुशियाँ हज़ार",image:"http://res.cloudinary.com/dcr2pfgxy/image/upload/v1518345334/1_VO_1_activity_Success_Story_jtk8yp.pdf"},
      {name:"जहा न पहुंचे बैंक वह पहुंची बैंक सखी",image:"http://res.cloudinary.com/dcr2pfgxy/image/upload/v1518345407/Success_Story_-_Bank_Sakhi_Manisha_Yadav_us6hb7.pdf"},
      {name:"लेखनी की कहानी (जिला राजनाँदगाँव )",image:"http://fortuneventures.in/nrlmsite/success/CMSACASESTUDIES-Lekhani-n-Devaki-RJN-1.3.16.pdf"},
      {name:"डेयरी बना आमदनी का स्रोत",image:"http://fortuneventures.in/nrlmsite/success/FianlSuccessStorydocx-May2016.pdf"},
      {name:"घटारानी की स्वसहायता समूह की कहानी",image:"http://fortuneventures.in/nrlmsite/success/IndividualCasestudyfromCGSRLM3.5.16.pdf"},
      {name:"सदस्य की केस स्टडीज ",image:"http://fortuneventures.in/nrlmsite/success/KurudCasestudies-May2016.pdf"},
      {name:"माहेश्वरी निषाद की कहानी ",image:"http://fortuneventures.in/nrlmsite/success/MaheshwariNishad-CMSA-Toilet-RJN-1.3.16.pdf"},
      {name:"सिलाई कार्य से आत्म सम्मान जागा ",image:"http://fortuneventures.in/nrlmsite/success/Ramchandarpur-SuccessStoryCashStudy.pdf"},
      {name:" सफलता की कहानी ",image:"http://fortuneventures.in/nrlmsite/success/Receivedon24092015.pdf"},
      {name:" धमंसरा  गांव की कहानी  ",image:"http://fortuneventures.in/nrlmsite/success/Story-of-Village-Dhamansara-of-Rajnandgaon-Block-ODF.pdf"},
      {name:"हथबंध सीलतरा  की कहानी ",image:"http://fortuneventures.in/nrlmsite/success/sucessStoryHathband-Simga-Block.pdf"},
      {name:"सफलता की नयी कहानी",image:"http://fortuneventures.in/nrlmsite/success/SucessstoryZPRaipur.pdf"},
      {name:"मिशन ने दिलाई जीने की नयी पहल",image:"http://fortuneventures.in/nrlmsite/success/SucsessStoryKoliha-Simga.pdf"},
    ]
    return (
      <View style={styles.container}>
      <View style={{height:50,alignSelf:'stretch',  backgroundColor:"#000000",flexDirection:"row",justifyContent:'center',alignItems:'center',zIndex:-2}}>
      <Text style={{color:'#ffffff',fontFamily: 'sans-serif-light',fontSize:18}}>{this.props.navigation.state.params.title}</Text>
      </View>
          <View style={{ height: 300 }}>
          <WebView
                  style={ styles.WebViewContainer }
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: `https://www.youtube.com/embed/${this.props.navigation.state.params.yid}` }}
          />
          </View>

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
    justifyContent:'center',
    backgroundColor:"#000000"
  },
  WebViewContainer: {

    marginTop: (Platform.OS == 'ios') ? 20 : 0,

  },
});
