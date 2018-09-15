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
} from 'react-native';
import AddProduct from './AddProduct';
import {
  getTheme,
  MKButton,
  MKColor,
} from 'react-native-material-kit';
import FAB from 'react-native-fab'
const theme = getTheme();

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result:null,
       modalVisible: false,
       district:'',
       jila:null,
       products:null,

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
    fetch('http://bihan.in/BihanAdmin/api/products')
   .then((response) => response.json())
    .then((responseJson) => {
      this.setState({result:responseJson,products:responseJson})
    })
    .catch((error) => {
      ToastAndroid.show('नेटवर्क उपलब्ध नहीं है', ToastAndroid.SHORT);
    });
    fetch('http://bihan.in/BihanAdmin/api/jilas')
   .then((response) => response.json())
    .then((responseJson) => {
      this.setState({jila:responseJson})
    })
    .catch((error) => {
      ToastAndroid.show('नेटवर्क उपलब्ध नहीं है', ToastAndroid.SHORT);
    });
  }

  selectDistrict(itemValue){
    if (itemValue !== "") {
      this.setState({district: itemValue},()=>{
        fetch(`http://bihan.in/BihanAdmin/api/product/${itemValue}`)
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
  selectProduct(itemValue){
    if (itemValue !== "") {
      this.setState({district: itemValue},()=>{
        fetch(`http://bihan.in/BihanAdmin/api/productname/${itemValue}`)
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




  render() {
      if (this.state.result == null) {
        return(
          <View style={styles.indicaorcontainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      }else {
        console.log(this.state.result);
        return (
          <View style={styles.container}>

          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={[theme.cardStyle,{borderColor:'#efefef',marginBottom:3,marginTop:2,backgroundColor:'#03A9F4',zIndex:200,height:50}]} >
          <Picker
            style={styles.picker}
            selectedValue={this.state.district}
            onValueChange={(itemValue, itemIndex) => this.selectDistrict(itemValue)}>
            <Picker.Item label="जिला चुने" value=""   />
            {
              this.state.jila == null ?    <Picker.Item label="jila not available" value=""   /> : this.state.jila.data.map((jil,i)=>{
                return (
                  <Picker.Item label={jil.name} value={jil.name}  key={i}/>
                )
              })

            }
          </Picker>
          </View>
          <View style={[theme.cardStyle,{borderColor:'#efefef',marginBottom:3,marginTop:2,backgroundColor:'#03A9F4',zIndex:200,height:50}]} >
          <Picker
            style={styles.picker}
            selectedValue={this.state.district}
            onValueChange={(itemValue, itemIndex) => this.selectProduct(itemValue)}>
            <Picker.Item label="उत्पाद चुने" value=""   />
            {
              this.state.products == null ?    <Picker.Item label="उत्पाद उपलब्ध नहीं है" value=""   /> : this.state.products.data.map((prd,i)=>{
                return (
                  <Picker.Item label={prd.utpad_naam} value={prd.utpad_naam}  key={i}/>
                )
              })

            }
          </Picker>
          </View>
          </View>


          {
              this.state.result.status === "unsuccess" ?
              null
              :
              <View style={{height:40,alignSelf:'stretch',backgroundColor:'#ffffff',flexDirection:"row",justifyContent:'center',alignItems:'center',zIndex:-2}}>
                <Text style={{color:'grey',fontFamily: 'sans-serif-light',fontSize:16,paddingLeft:10}}>जिलेवार सभी उत्पादों की सूची (कृपया नीचे जाएँ) </Text>
              </View>
          }



            <ScrollView style={{width:'100%'}}>
              {
                this.state.result.status === "unsuccess" ?
                <Text style={{fontSize:20,marginTop:100,marginLeft:20,color:'blue'}}>{`संबंधित जिले का अभी उत्पाद विवरण नहीं हैं कृपया ऊपर दूसरे जिले का चुनाव करें`}</Text>:
                this.state.result.data.map((product,i)=>{
                  return(
                    <View style={[theme.cardStyle,{borderColor:'#efefef',backgroundColor:'#efefef',marginBottom:3}]} key={i}>
                      <Image source={{uri:product.utpad_image}} style={[theme.cardImageStyle]} key={i} />
                      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                      <Text
                      style={[theme.cardContentStyle,{margin:0,paddingTop:5,paddingBottom:0,paddingLeft:10,fontSize:20,color:'#03A9F4'}]}
                      >{product.utpad_naam}</Text>
                      <Text
                      style={[theme.cardContentStyle,{margin:0,paddingTop:5,paddingBottom:0,paddingLeft:10,fontSize:20,color:'black'}]}
                      >{product.district}</Text>
                      </View>
                      <Text
                      style={[theme.cardContentStyle,{margin:0,paddingTop:0,paddingBottom:0,paddingLeft:10,color:'black'}]}
                      >मूल्य (INR):  {product.pratimulya} /-</Text>
                      <Text style={[theme.cardContentStyle,{margin:0,paddingTop:0,paddingBottom:0,paddingLeft:10,}]}>श्रेणी: {product.utpadanshreni}</Text>
                      <Text style={[theme.cardContentStyle,{margin:0,paddingTop:0,paddingBottom:0,paddingLeft:10,}]}> इकाई : {product.ikai}</Text>
                      <Text style={[theme.cardContentStyle,{margin:0,paddingTop:0,paddingBottom:0,paddingLeft:10,}]}>उत्पादन क्षमता: {product.utpadan_kshamta}</Text>
                      <Text style={[theme.cardContentStyle,{margin:0,paddingTop:0,paddingBottom:0,paddingLeft:10,}]}>मौसमी: {product.maushmi}</Text>
                      <Text style={[theme.cardContentStyle,{margin:0,paddingTop:0,paddingBottom:0,paddingLeft:10,}]}>कच्चा माल स्रोत: {product.kacha_mal_srot}</Text>
                      <Text style={[theme.cardContentStyle,{margin:0,paddingTop:0,paddingBottom:0,paddingLeft:10,}]}>बाजार: {product.bazaar}</Text>
                      <Text style={[theme.cardContentStyle,{margin:0,paddingTop:0,paddingBottom:0,paddingLeft:10,}]}>कौशल स्तर: {product.kaushal_star}</Text>
                      <Text style={[theme.cardContentStyle,{margin:0,paddingTop:0,paddingBottom:0,paddingLeft:10,}]}>पूंजीगत निवेश की आवश्यकता: {product.punji_nivesh}</Text>
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

export default ProductScreen;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
let width = DEVICE_WIDTH - DEVICE_WIDTH/2


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
    width : width -10,
    height: 40,
    borderColor: 'gray',
  },
  innerContainer: {
    alignItems: 'center',
    borderWidth:2
  },


});
