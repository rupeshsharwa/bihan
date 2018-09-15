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

class Complaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      mobile:'',
      category:'',
      district:'',
      block:'',
      message:'',
      status:"1",
      jila:null,
      blocks:null,
    };
    this.selectCategory = this.selectCategory.bind(this);
  }

  componentWillMount() {
    fetch('http://bihan.in/BihanAdmin/api/jilas')
   .then((response) => response.json())
    .then((responseJson) => {
      this.setState({jila:responseJson})
    })
    .catch((error) => {
      ToastAndroid.show('something went wrong with jila', ToastAndroid.SHORT);
    });
  }


  selectCategory(itemValue){
    this.setState({category:itemValue})
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

uploadProduct(){
let name = this.state.name.toString();
let mobile = this.state.mobile.toString();
let category = this.state.category.toString();
let district = this.state.district.toString();
let block = this.state.block.toString();
let message = this.state.message.toString();
let status = this.state.status.toString();

if (name === '') {
  ToastAndroid.show('कृप्या नाम लिखें', ToastAndroid.SHORT);
  return false;
}
if (mobile === '') {
  ToastAndroid.show('मोबाइल नंबर चुन', ToastAndroid.SHORT);
  return false;
}
if (category === '') {
  ToastAndroid.show('श्रेणी चयन करें', ToastAndroid.SHORT);
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
if (message === '') {
  ToastAndroid.show('संदेश लिखें', ToastAndroid.SHORT);
  return false;
}


fetch(`http://bihan.in/BihanAdmin/api/add_contact?name=${name}&mobile=${mobile}&category=${category}&district=${district}&block=${block}&message=${message}&status=${status}`)
 .then((response) => response.json())
 .then((responseJson) => {
   if (responseJson.status === "success" ) {
     ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
     this.setState({
       name:'',
       mobile:'',
       category:'',
       district:'',
       block:'',
       message:'',
     })
   }
   if (responseJson.status === "unsuccess" ) {
     ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
   }
 })
 .catch((error) => {
   // ToastAndroid.show("ें", ToastAndroid.SHORT);
 });


}


  render() {
    if (this.state.jila == null ) {
      return(
        <View style={styles.indicaorcontainer}>
         <ActivityIndicator size="large" color="#0000ff" />
         </View>
      )

    }else {
      return (
        <View style={styles.container}>

          <Text style={{fontSize:20}}>सुझाव / शिकायत</Text>
          <ScrollView>

          <TextInput
             style={styles.input}
             onChangeText={(name) => this.setState({name})}
             value={this.state.name}
             placeholder="नाम"
           />
          <TextInput
             style={styles.input}
             onChangeText={(mobile) => this.setState({mobile})}
             value={this.state.mobile}
             placeholder="मोबाइल नंबर"
             keyboardType="numeric"
           />

          <Picker
            style={styles.picker}
            selectedValue={this.state.category}
            onValueChange={(itemValue, itemIndex) => this.selectCategory(itemValue)}>
            <Picker.Item label="श्रेणी चयन करें" value=""   />
            <Picker.Item label="सुझाव" value="सुझाव"   />
            <Picker.Item label="शिकायते" value="शिकायते"   />
          </Picker>

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

          <View style={{
             backgroundColor:'#ffffff',
             borderBottomColor: '#000000',
            }}
           >
             <TextInput
               style={styles.inputtextarea}
               multiline = {true}
               numberOfLines = {4}
               onChangeText={(message) => this.setState({message})}
               value={this.state.message}
               placeholder="संदेश"
             />
           </View>

           <TouchableOpacity style={styles.bookbutton}
             onPress={this.uploadProduct.bind(this)} >
                  <Text style={styles.text1}>सुरक्षित करे</Text>
            </TouchableOpacity>


          </ScrollView>
        </View>
      );

    }
  }

}

export default Complaint;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
let width = DEVICE_WIDTH - DEVICE_WIDTH/1.8


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  indicaorcontainer:{
   flex: 1,
   backgroundColor: '#F5FCFF',
   alignItems:'center',
   justifyContent:'center'
 },

  picker:{
    width : DEVICE_WIDTH -60 ,
    height: 40,
    borderColor: 'gray',
    margin:5,
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
    text1:{
      color:'#ffffff',
      fontSize:20,
    },

})
