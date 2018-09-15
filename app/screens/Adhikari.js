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
  Button,
  Modal,
  Picker,
  Dimensions,
  Linking,
} from 'react-native';
import AddProduct from './AddProduct';
import {
  getTheme,
  MKButton,
  MKColor,
} from 'react-native-material-kit';
import FAB from 'react-native-fab'
const theme = getTheme();

class Adhikari extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result:null,
       modalVisible: false,
       district:'',
       jila:null

    } ;
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
   this.setState({modalVisible:true});
 }

 closeModal() {
   this.setState({modalVisible:false});
 }


  componentWillMount() {
    fetch('http://bihan.in/BihanAdmin/api/get_adhikari/1')
   .then((response) => response.json())
    .then((responseJson) => {
      this.setState({result:responseJson})
    })
    .catch((error) => {
      ToastAndroid.show('नेटवर्क उपलब्ध नहीं है', ToastAndroid.SHORT);
    });
  }

  selectDistrict(itemValue){
    if (itemValue !== "") {
      if (itemValue === "0") {
        this.setState({district: itemValue},()=>{
          fetch(`http://bihan.in/BihanAdmin/api/adhikari`)
         .then((response) => response.json())
          .then((responseJson) => {
            this.setState({result:responseJson.data})
          })
          .catch((error) => {
            ToastAndroid.show('something went wrong with blocks', ToastAndroid.SHORT);
          });

        })
      }else {
        this.setState({district: itemValue},()=>{
          fetch(`http://bihan.in/BihanAdmin/api/get_adhikari/${itemValue}`)
         .then((response) => response.json())
          .then((responseJson) => {
            this.setState({result:responseJson})
          })
          .catch((error) => {
            ToastAndroid.show('something went wrong with blocks', ToastAndroid.SHORT);
          });

        })
      }
    }
  }

  callNumber = (url) =>{
    Linking.canOpenURL(url).then(supported => {
    if (!supported) {
     console.log('Can\'t handle url: ' + url);
    } else {
     return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));
 }


  render() {
    if (this.state.result == null ) {
      return(
        <View style={styles.indicaorcontainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }else {
      return (
        <View style={styles.container}>


        <View style={[theme.cardStyle,{borderColor:'#efefef',marginBottom:3,marginTop:2,backgroundColor:'#03A9F4',zIndex:200,height:50}]} >
        <Picker
          style={styles.picker}
          selectedValue={this.state.district}
          onValueChange={(itemValue, itemIndex) => this.selectDistrict(itemValue)}>
          <Picker.Item label="राज्य स्तर अधिकारीे" value="1"   />
          <Picker.Item label="जिला स्तर अधिकारी" value="2"   />
          <Picker.Item label="ब्लॉक स्तर अधिकारी" value="3"   />
            <Picker.Item label="Select All" value="0"   />
        </Picker>
        </View>
        <View style={{height:40,alignSelf:'stretch',backgroundColor:'#ffffff',flexDirection:"row",justifyContent:'center',alignItems:'center',zIndex:-2}}>
          <Text style={{color:'grey',fontFamily: 'sans-serif-light',fontSize:16,paddingLeft:10}}>कृपया स्टेट / जिला / ब्लॉक स्तर अधिकारी की जानकारी हेतु उपर चयन करे</Text>
        </View>


          <ScrollView style={{width:'100%'}}>
          {
            this.state.result == null  ?
            <Text>Not avaialble</Text>
            :
            this.state.result.map((adhikari,i)=>{
              return(
                <View key={i} style={[theme.cardStyle,{borderColor:'#efefef',marginBottom:3,backgroundColor:'#efefef'}]}>
                  <Text style={[theme.cardContentStyle,{margin:0,paddingTop:5,paddingBottom:0,paddingLeft:10,fontSize:20,color:'black'}]}>{adhikari.name}</Text>
                  <Text style={[theme.cardContentStyle,{color:'#000000',margin:0,padding:1,marginLeft:18}]}>Designation : {adhikari.designation}</Text>
                  {
                    adhikari.posting_cat === "स्टेट" ? null
                  :  <Text style={[theme.cardContentStyle,{color:'#000000',margin:0,padding:1,marginLeft:18}]}>Posting : {adhikari.posting}</Text>
                  }

                  <Text style={[theme.cardContentStyle,{color:'blue',margin:5,padding:5,marginLeft:18}]} onPress={()=> this.callNumber(`tel:+91${adhikari.mobile}`)} >Call : {adhikari.mobile}</Text>
                </View>
              )
            })
          }
          </ScrollView>
        </View>
      );
    }
  }
}

export default Adhikari;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
let width = DEVICE_WIDTH - DEVICE_WIDTH/1.8


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
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
      backgroundColor: '#03A9F4',
      height: 40,
      width:120,
      borderRadius: 10,
      zIndex: 100,
      margin:5,
    },
  bookbutton1: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      height: 40,
      width:120,
      borderRadius: 10,
      zIndex: 100,
      margin:5,
      borderWidth:1
    },
    buttonview:{
      margin:5,
      zIndex:100,
    },
    card:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#0277BD',
      width:width,
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
         alignSelf:'center',
         width:'100%',
         backgroundColor:'#ffffff',
         borderBottomLeftRadius:5,
         borderBottomRightRadius:5,
         flex:1,
         flexDirection:"row",
         justifyContent:'center',
         alignItems:'center',
     }, fab: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  picker:{
    width : DEVICE_WIDTH - 80,
    height: 40,
    borderColor: 'gray',
  },
  innerContainer: {
    alignItems: 'center',
    borderWidth:2
  },


});
