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
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';


export default class PDFScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }

  openUrl(url){
    if (url == null) {
      ToastAndroid.show('Not Valid Link', ToastAndroid.SHORT);
      return ;
    }
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  componentDidMount() {
    fetch('http://bihan.in/BihanAdmin/api/storypdf')
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
      {name:"बिहान बाजार खुशियाँ हज़ार",image:"http://res.cloudinary.com/dcr2pfgxy/image/upload/v1518345334/1_VO_1_activity_Success_Story_jtk8yp.pdf"},
      {name:"जहा न पहुंचे बैंक वहा पहुंची बैंक सखी",image:"http://res.cloudinary.com/dcr2pfgxy/image/upload/v1518345407/Success_Story_-_Bank_Sakhi_Manisha_Yadav_us6hb7.pdf"},
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

    if (this.state.data.length == 0) {
      return(
        <View style={styles.indicaorcontainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }else {
    return (
      <View style={styles.container}>
          <ScrollView contentContainerStyle={{alignItems:'center'}}>
          <View style={{height:30,alignSelf:'stretch',backgroundColor:'#000000',flexDirection:"row",justifyContent:'center',alignItems:'center',zIndex:-2}}>
            <Text style={{color:'#ffffff',fontFamily: 'sans-serif-light',fontSize:18}}>पी.डी.एफ डाउनलोड करे</Text>
          </View>

            {
              this.state.data.map((list,i)=>{
                return(
                  <TouchableOpacity key={i} style={styles.list}
                    onPress={this.openUrl.bind(this,list.spdf)} >
                         <Text style={styles.text1}>{this.trunc(list.stitle)}</Text>
                         <Image source={require('../images/download1.png')} style={{marginRight:5}} />
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


      const DEVICE_WIDTH = Dimensions.get('window').width;
      const DEVICE_HEIGHT = Dimensions.get('window').height;
      let width = DEVICE_WIDTH - DEVICE_WIDTH/1.8

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent:'center',
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
        bookbutton1: {
          width:DEVICE_WIDTH - 80 ,
          justifyContent:'space-between',
          alignItems:'center',
          backgroundColor: '#BBDEFB',
          height: 50,
          zIndex: 100,
          margin:5,

        },
        text1:{
          color:'#000000',

      fontSize:18,
      marginLeft:5,
    },
    text:{
      color:'#ffffff',
      fontSize:18,
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


});
