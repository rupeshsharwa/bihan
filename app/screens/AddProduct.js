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
  TextInput,
  Picker,
  Modal,
  Dimensions,
} from 'react-native';
const IMEI = require('react-native-imei');
var ImagePicker = require('react-native-image-picker');

class AddProduct extends Component {

constructor(props) {
  super(props);
  this.state = {
    ip_address:'',
    mobile:'',
    district:'',
    block:'',
    image:'',
    description:'',
    status:'0',
    jila:null,
    blocks:null,
  };
  this.selectDistrict = this.selectDistrict.bind(this)
  this.selectBlock = this.selectBlock.bind(this)
}
componentWillMount() {
  fetch('http://bihan.in/BihanAdmin/api/jilas')
 .then((response) => response.json())
  .then((responseJson) => {
    const Imei = IMEI.getImei()
    this.setState({jila:responseJson,ip_address:Imei})
  })
  .catch((error) => {
    ToastAndroid.show('something went wrong with jila', ToastAndroid.SHORT);
  });
}

selectDistrict(itemValue){
   this.setState({district: itemValue},()=>{
     fetch(`http://bihan.in/BihanAdmin/api/jilablocksearch/${itemValue}`)
    .then((response) => response.json())
     .then((responseJson) => {
       this.setState({blocks:responseJson})
     })
     .catch((error) => {
       ToastAndroid.show('something went wrong with blocks', ToastAndroid.SHORT);
     });

   })
}
selectBlock(itemValue){
   this.setState({block: itemValue})
}
pickImage(options){
  ImagePicker.showImagePicker(options, (response) => {
if (response.didCancel) {
  console.log('User cancelled image picker');
}
else if (response.error) {
  console.log('ImagePicker Error: ', response.error);
}
else if (response.customButton) {
  console.log('User tapped custom button: ', response.customButton);
}
else {
  let source = { uri: response.uri };
  this.uploadImage(response.uri)
}
});
}

uploadImage(uri) {
  ToastAndroid.show('फोटो अपलोड हो रही है...', ToastAndroid.SHORT);
let timestamp = (Date.now() / 1000 | 0).toString();
let api_key = 'your api key'
let api_secret = 'your api secret'
let cloud = 'your cloud name'
let hash_string = 'timestamp=' + timestamp + api_secret
let upload_url = 'https://api.cloudinary.com/v1_1/' + cloud + '/image/upload'

let xhr = new XMLHttpRequest();
xhr.open('POST', upload_url);
xhr.onload = (r) => {
  const json = JSON.parse(xhr.response)
  const imageurl = json.secure_url
  this.setState({image:imageurl},()=>{
    ToastAndroid.show('सफलतापूर्वक अपलोड', ToastAndroid.SHORT);
  })
};
let formdata = new FormData();
formdata.append('file', {uri: uri, type: 'image/png', name: 'upload.png'});
formdata.append('timestamp', timestamp);
formdata.append('cloud_name', "dcr2pfgxy");
formdata.append('api_key', "738755926697359");
formdata.append('api_secret', "KPwO8k-eYAkmxVztajXV3BOfGAI");
formdata.append('upload_preset', "kzkxno3w");
xhr.send(formdata);
}

uploadProduct(){

  let ip_address = this.state.ip_address;
  let mobile = this.state.mobile;
  let district = this.state.district;
  let block = this.state.block;
  let image = this.state.image;
  let description = this.state.description;
  let status = this.state.status;

  if (ip_address === '') {
     ToastAndroid.show('Imei number not found', ToastAndroid.SHORT);
    return false;
  }
  if (mobile === '') {
    ToastAndroid.show('मोबाइल नंबर चुने', ToastAndroid.SHORT);
    return false;
  }
  var pattern = /^\d{10}$/;
      if (pattern.test(mobile)) {
      } else {
        ToastAndroid.show('मोबाइल नंबर गलत है', ToastAndroid.SHORT);
        return false;
      }

  if (district === '') {
    ToastAndroid.show('जिला चुने', ToastAndroid.SHORT);
    return false;
  }
  if (block === '') {
    ToastAndroid.show('ब्लॉक चुने', ToastAndroid.SHORT);
    return false;
  }
  if (image === '') {
    ToastAndroid.show('फोटो फिर से चुने ', ToastAndroid.SHORT);
    return false;
  }


  fetch(`http://bihan.in/BihanAdmin/api/add_product?ip_address=${ip_address}&mobile=${mobile}&district=${district}&block=${block}&image=${image}&description=${description}&status=${status}`)
   .then((response) => response.json())
   .then((responseJson) => {
     if (responseJson.status === "success" ) {
       ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
       this.setState({
         ip_address:'',
         mobile:'',
         district:'',
         block:'',
         image:'',
         description:'',
       })
     }
     if (responseJson.status === "unsuccess" ) {
       ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
     }
   })
   .catch((error) => {
     ToastAndroid.show("कृपया फिर से कोशिश करें", ToastAndroid.SHORT);
   });

}

  render() {
    var options = {
        title: 'Select Avatar',
        customButtons: [
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };
      if (this.state.jila == null) {
        return(
          <View style={styles.indicaorcontainer}>
           <ActivityIndicator size="large" color="#0000ff" />
           </View>
        )
      }else {
        return (
           <View style={styles.modalContainer}>
           <ScrollView>
             <View style={styles.innerContainer}>

               <Text style={{fontSize:20,margin:5}}>उत्पाद अपलोड (Upload Product)</Text>
               <Text style={{fontSize:13,margin:5}}>अगर आपके पास कोई उत्पाद है, जिसे आप स्वयं सहायता समूह के माध्यम से बाजार में बेचना / जानकारी चाह रहे है तो कृपया उसकी फोटो अपलोड करे !</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.district}
                  onValueChange={(itemValue, itemIndex) => this.selectDistrict(itemValue)}>
                  <Picker.Item label="जिला चुने" value=""   />
                  {
                    this.state.jila.data.map((jil,i)=>{
                      return (
                        <Picker.Item label={jil.name} value={jil.name}  key={i}/>
                      )
                    })

                  }
                </Picker>


                <Picker
                  style={styles.picker}
                  selectedValue={this.state.block}
                  onValueChange={(itemValue, itemIndex) => this.selectBlock(itemValue)}>
                  <Picker.Item label="ब्लॉक चुनेे" value="" />
                  {
                    this.state.blocks == null ?
                    <Picker.Item label="ब्लॉक चुनेे" value="" />
                    :
                    this.state.blocks.map((jil,i)=>{
                      return (
                        <Picker.Item label={jil.name} value={jil.name}  key={i}/>
                      )
                    })
                  }
                </Picker>

               <TextInput
                  style={styles.input}
                  onChangeText={(mobile) => this.setState({mobile})}
                  value={this.state.mobile}
                  placeholder="मोबाइल नंबर"
                  keyboardType="numeric"
                />
                <View style={{
                   backgroundColor:'#ffffff',
                   borderBottomColor: '#000000',
                  }}
                 >
                   <TextInput
                     style={styles.inputtextarea}
                     multiline = {true}
                     numberOfLines = {4}
                     onChangeText={(description) => this.setState({description})}
                     value={this.state.description}
                     placeholder="उत्पाद का विवरण, मूल्य / दर, क्षमता "
                   />
                 </View>

                 <TouchableOpacity style={styles.bookbutton1}
                   onPress={this.pickImage.bind(this,options)} >
                        <Text style={styles.text1}>फोटो अपलोड</Text>
                  </TouchableOpacity>

                 <TouchableOpacity style={styles.bookbutton}
                   onPress={this.uploadProduct.bind(this)} >
                        <Text style={styles.text1}>सुरक्षित करे</Text>
                  </TouchableOpacity>


             </View>
             </ScrollView>
           </View>
        );
      }
  }
}

export default AddProduct;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
let width = DEVICE_WIDTH - DEVICE_WIDTH/1.8


const styles = StyleSheet.create({
  indicaorcontainer:{
   flex: 1,
   backgroundColor: '#F5FCFF',
   alignItems:'center',
   justifyContent:'center'
 },
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    alignItems: 'center',
  },
  input:{
    width : DEVICE_WIDTH -60 ,
    height: 40,
    borderColor: 'gray',
    margin:5
  },
  inputtextarea:{
    width : DEVICE_WIDTH -60 ,
    borderColor: 'gray',
    margin:5
  },
  picker:{
    width : DEVICE_WIDTH -60 ,
    height: 40,
    borderColor: 'gray',
    margin:5,
  },
  bookbutton: {
      width:DEVICE_WIDTH - 60,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#03A9F4',
      height: 50,
      zIndex: 100,
      borderRadius:20,
      margin:5
    },
  bookbutton1: {
      width:DEVICE_WIDTH - 60,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'grey',
      height: 50,
      zIndex: 100,
      borderRadius:20,
      margin:5
    },
    text1:{
      color:'#ffffff',
      fontSize:20,
    },
});
